import numpy as np
import tensorflow as tf
from fastapi import UploadFile
from PIL import Image
import io
from app.config import MODEL_PATH, IMG_SIZE, CLASS_NAMES

# Load the model with custom_objects parameter
try:
    model = tf.keras.models.load_model(
        MODEL_PATH,
        compile=False  # Try loading without compilation
    )
except Exception as e:
    print(f"Error loading model: {e}")
    # Alternative loading method if the first fails
    model = tf.keras.models.load_model(
        MODEL_PATH,
        custom_objects={'CustomLayer': tf.keras.layers.Layer}
    )

async def predict_image(file: UploadFile):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).resize((IMG_SIZE, IMG_SIZE)).convert("RGB")
    img_array = np.expand_dims(np.array(image) / 255.0, axis=0)
    
    predictions = model.predict(img_array)[0]
    class_index = np.argmax(predictions)
    confidence = float(predictions[class_index])
    return {
        "predicted_class": CLASS_NAMES[class_index],
        "confidence": confidence
    }
