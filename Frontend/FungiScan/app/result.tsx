import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ResultScreen() {
  const router = useRouter();
  const { predicted_class, confidence, imageUri } = useLocalSearchParams();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultat du diagnostic</Text>

      {imageUri && (
        <Image source={{ uri: imageUri as string }} style={styles.image} />
      )}

      <View style={styles.resultBox}>
        <Text style={styles.resultText}>Maladie détectée : {predicted_class}</Text>
        <Text style={styles.resultText}>Confiance : {parseFloat(confidence as string).toFixed(2)}%</Text>
      </View>

      <Button title="⬅️ Retour" onPress={handleBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2e7d32',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 24,
    borderRadius: 12,
  },
  resultBox: {
    marginBottom: 32,
    padding: 20,
    backgroundColor: '#e0f2f1',
    borderRadius: 10,
    width: '90%',
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: '#004d40',
    marginBottom: 8,
  },
});
