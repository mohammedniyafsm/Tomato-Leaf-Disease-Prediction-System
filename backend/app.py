from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os
from werkzeug.utils import secure_filename

# Initialize the Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes (frontend-backend interaction)

# Load the trained Keras model
model = load_model('InceptionV3_256.keras')  # ✅ Ensure this file exists in the same directory

# Class names (must match the model's training output)
class_names = [
    'Bacterial Spot', 'Early Blight', 'Late Blight', 'Leaf Mold', 'Septoria Leaf Spot',
    'Spider Mites', 'Target Spot', 'Yellow Leaf Curl Virus', 'Mosaic Virus', 'Healthy'
]

# Folder for uploaded images
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# 🔍 Disease treatment suggestions
def get_treatment(disease_name):
    treatment_dict = {
        'Bacterial Spot': 'Apply copper-based fungicides.',
        'Early Blight': 'Remove infected leaves and apply fungicides.',
        'Late Blight': 'Apply fungicides and remove affected plant parts.',
        'Leaf Mold': 'Increase air circulation and remove infected leaves.',
        'Septoria Leaf Spot': 'Remove infected leaves and apply fungicide.',
        'Spider Mites': 'Use insecticidal soap to control pests.',
        'Target Spot': 'Apply fungicides to control infection.',
        'Yellow Leaf Curl Virus': 'Remove infected plants and control vector pests.',
        'Mosaic Virus': 'Remove infected plants to prevent spread.',
        'Healthy': 'No treatment needed.'
    }
    return treatment_dict.get(disease_name, 'No treatment information available.')

# 🧠 Prediction logic
def predict_image(img_path):
    img = image.load_img(img_path, target_size=(256, 256))  # Ensure size matches model input
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # (1, 256, 256, 3)
    img_array = img_array / 255.0  # Normalize pixel values

    prediction = model.predict(img_array)
    predicted_index = np.argmax(prediction)
    predicted_class = class_names[predicted_index]
    confidence = float(np.max(prediction))  # Convert float32 to float for JSON

    return predicted_class, confidence

# 📸 Prediction endpoint
@app.route('/api/predict', methods=['POST'])
def predict():
    if 'leafImage' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['leafImage']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        filename = secure_filename(file.filename)
        img_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(img_path)

        # Get prediction and treatment
        predicted_class, confidence = predict_image(img_path)
        result = {
            'disease': predicted_class,
            'confidence': round(confidence * 100, 2),  # Percentage
            'treatment': get_treatment(predicted_class)
        }
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# 🚀 Run the app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
