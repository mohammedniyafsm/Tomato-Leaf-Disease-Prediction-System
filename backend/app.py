from flask import Flask, request, jsonify, render_template
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os
import tensorflow as tf
import logging
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Check if model file exists
if not os.path.exists('InceptionV3_256.keras'):
    print("Error: Model file 'InceptionV3_256.keras' not found.")
    exit(1)

# Load model with error handling
try:
    model = load_model('InceptionV3_256.keras')
    print("Model loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")
    exit(1)

IMG_WIDTH = 256
IMG_HEIGHT = 256

# Define class names matching your index mappings
class_names = [
    'Bacterial Spot',      # 0
    'Early Blight',        # 1
    'Late Blight',         # 2
    'Leaf Mold',           # 3
    'Septoria Leaf Spot',  # 4
    'Spider Mites',        # 5
    'Target Spot',         # 6
    'Yellow Leaf Curl Virus',  # 7
    'Mosaic Virus',        # 8
    'Healthy'              # 9
]

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def predict_image(img_path):
    try:
        img = image.load_img(img_path, target_size=(IMG_WIDTH, IMG_HEIGHT))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.0
        prediction = model.predict(img_array, verbose=0)
        predicted_class = np.argmax(prediction[0])
        confidence = float(prediction[0][predicted_class])  # Convert to Python float
        probabilities = {class_name: float(prob) for class_name, prob in zip(class_names, prediction[0])}  # Convert all to float
        logger.info(f"Prediction for {img_path}: {probabilities}")
        return class_names[predicted_class], confidence, probabilities
    except Exception as e:
        logger.error(f"Prediction error for {img_path}: {e}")
        raise

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        try:
            class_name, confidence, probabilities = predict_image(file_path)
            if confidence < 0.7:  # Threshold
                return jsonify({'prediction': 'Uncertain', 'confidence': confidence, 'probabilities': probabilities})
            os.remove(file_path)
            return jsonify({'prediction': class_name, 'confidence': confidence, 'probabilities': probabilities})
        except Exception as e:
            os.remove(file_path) if os.path.exists(file_path) else None
            return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("Num GPUs Available: ", len(tf.config.list_physical_devices('GPU')))
    app.run(debug=True, host='0.0.0.0', port=5000)