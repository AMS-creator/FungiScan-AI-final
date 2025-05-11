import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { predictImage, PredictionResponse } from '../lib/api';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePrediction = async () => {
    if (!image) return;

    try {
      setLoading(true);
      const result = await predictImage(image);
      router.push({
        pathname: '/result',
        params: {
          predicted_class: result.predicted_class,
          confidence: result.confidence.toString(),
          imageUri: image,
        },
      });
    } catch (error) {
      Alert.alert('Erreur', "Impossible d'envoyer l'image");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FungiScan AI 🌳</Text>

      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="📷 Choisir une image" onPress={pickImage} />

      {image && !loading && (
        <Button title="🔍 Lancer la détection" onPress={handlePrediction} />
      )}

      {loading && <ActivityIndicator size="large" color="#00aa00" style={{ marginTop: 20 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#388e3c',
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 20,
    borderRadius: 12,
  },
});
