import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';

function PredictionPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (file) => {
    if (!file) return;
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result);
    reader.readAsDataURL(file);
    setResult(null);
    setError('');
  };

  // Cancel upload
  const handleCancel = () => {
    setSelectedFile(null);
    setPreviewUrl('');
    setResult(null);
    setError('');
  };

  // Drag & drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileChange(file);
  };

  // Submit for prediction
  const handlePredict = async () => {
    if (!selectedFile) return;
    setIsLoading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('leafImage', selectedFile);
      const response = await axios.post('/api/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(response.data);
    } catch (err) {
      setError('Prediction failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Predict again functionality
  const handlePredictAgain = () => {
    setResult(null);
    setPreviewUrl('');
    setSelectedFile(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white mt-20 py-8 px-4">
      <div className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-6 px-4">
          <h1 className="text-2xl font-bold mb-2">Leaf Disease Predictor</h1>
          <p className="text-sm opacity-90">Upload a tomato leaf image and get AI-driven disease detection</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* No upload yet: show upload area */}
          {!previewUrl && (
            <div
              className={`border-2 ${isDragging ? 'border-green-400 bg-green-50' : 'border-gray-300 bg-gray-50'} border-dashed rounded-lg h-52 flex flex-col items-center justify-center cursor-pointer transition`}
              onClick={() => inputRef.current.click()}
              onDragOver={handleDrag}
              onDragEnter={handleDrag}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <FaCloudUploadAlt className="text-4xl text-gray-400 mb-2" />
              <p className="text-gray-600">Drag & drop or click to upload</p>
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
            </div>
          )}

          {/* After upload, before prediction: show preview & buttons */}
          {previewUrl && !result && (
            <div className="flex flex-col items-center space-y-6">
              <div className="border rounded-lg overflow-hidden w-full">
                <img
                  src={previewUrl}
                  alt="Leaf Preview"
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handlePredict}
                  disabled={isLoading}
                  className="flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full disabled:opacity-50 transition"
                >
                  {isLoading && <FaSpinner className="animate-spin mr-2" />}
                  {isLoading ? 'Predicting...' : 'Predict'}
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full transition"
                >
                  Cancel
                </button>
              </div>
              {error && <p className="text-red-600 text-center">{error}</p>}
            </div>
          )}

          {/* After prediction: show result */}
          {result && (
            <div className="space-y-4">
              <div className="border rounded-lg overflow-hidden w-full">
                <img
                  src={previewUrl}
                  alt="Leaf Preview"
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg max-h-64 overflow-y-auto">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Prediction Result</h2>
                <p className="text-gray-700"><span className="font-medium">Disease:</span> {result.disease}</p>
                <p className="text-gray-700"><span className="font-medium">Confidence:</span> {result.confidence > 1000 ? '100%' : `${Math.round(result.confidence * 100)}%`}</p>
                {result.treatment && (
                  <div className="mt-4">
                    <p className="font-medium">Treatment:</p>
                    <p className="text-gray-700">{result.treatment}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={handlePredictAgain}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition"
                >
                  Predict Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PredictionPage;
