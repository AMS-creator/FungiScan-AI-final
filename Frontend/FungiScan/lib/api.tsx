// lib/api.ts
import axios from 'axios';
import { Platform } from 'react-native';

export interface PredictionResponse {
  predicted_class: string;
  confidence: number;
}

const API_BASE_URL = Platform.select({
  android: 'http://192.168.100.199:8000',
  ios: 'http://192.168.100.199:8000',
  web: 'http://192.168.100.199:8000',
});

export async function predictImage(uri: string): Promise<PredictionResponse> {
  const formData = new FormData();
  let file: any;

  if (Platform.OS === 'web') {
    const response = await fetch(uri);
    const blob = await response.blob();
    file = new File([blob], 'leaf.jpg', { type: 'image/jpeg' });
  } else {
    file = {
      uri,
      type: 'image/jpeg',
      name: 'leaf.jpg',
    };
  }

  formData.append('file', file);

  const response = await axios.post(`${API_BASE_URL}/predict`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}
