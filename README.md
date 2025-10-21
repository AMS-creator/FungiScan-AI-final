## 🧠 **Aperçu du Projet**

**FungiScan AI** est une application mobile intelligente qui permet de **détecter automatiquement les maladies fongiques** sur les plantes à partir d’images capturées ou importées.  
Elle repose sur un **modèle de deep learning (CNN)** déployé via une **API FastAPI**, et fournit des **recommandations précises** aux agriculteurs pour le traitement et la prévention.

---

## 🚀 **Fonctionnalités Clés**

- ✅ Détection en temps réel des maladies fongiques à partir d’images  
- 🧬 Modèle CNN entraîné sur le dataset [PlantVillage](https://data.mendeley.com/datasets/tywbtsjrjv/1)  
- 💡 Recommandations de traitement personnalisées  
- 📱 Application mobile multiplateforme (**Android & iOS**) développée en **React Native (TypeScript)**  
- ⚙️ API **FastAPI** pour la prédiction et la gestion des rapports  
- 🧾 Sauvegarde locale de l’historique + génération de rapports PDF  
- ☁️ Prêt pour déploiement Cloud (AWS, GCP, Azure)

---

## 🏗️ **Architecture du Projet**

FungiScan-AI/
│
├── backend/ # API FastAPI (modèle IA et endpoints REST)
│ ├── app.py
│ ├── model/
│ └── requirements.txt
│
├── mobile/ # Application mobile React Native
│ ├── src/
│ │ ├── screens/
│ │ ├── components/
│ │ ├── services/
│ │ └── utils/
│ ├── App.tsx
│ └── package.json
│
├── reports/ # Rapports PDF locaux
├── datasets/ # Données d'entraînement (optionnel)
├── README.md
└── .gitignore


---

## ⚙️ **Installation & Exécution**

### 1️⃣ Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/FungiScan-AI.git
cd FungiScan-AI

2️⃣ Démarrer le Backend FastAPI

cd backend
pip install -r requirements.txt
uvicorn app:app --reload

➡️ L’API sera disponible sur : http://127.0.0.1:8000
3️⃣ Lancer l’Application Mobile React Native

cd mobile
npm install
npx react-native start
npx react-native run-android   # ou run-ios

📡 Endpoints Principaux
Méthode	Endpoint	Description
POST	/predict	Envoie une image et retourne la maladie détectée
GET	/info/{disease}	Fournit les détails et recommandations
GET	/health	Vérifie l’état du serveur

Exemple cURL :

curl -X POST "http://127.0.0.1:8000/predict" -F "image=@leaf.jpg"

Réponse JSON :

{
  "disease": "Mildiou",
  "confidence": 97.5,
  "recommendation": "Utilisez un fongicide à base de cuivre et évitez l’humidité prolongée."
}



Composant	Technologie
Frontend	React Native (TypeScript), Expo, Axios, React Navigation
Backend	FastAPI (Python), Uvicorn
Modèle IA	CNN (MobileNetV2) – TensorFlow / PyTorch
Stockage local	AsyncStorage / SQLite
Rapports PDF	ReportLab / FPDF
Cloud (optionnel)	AWS S3, GCP Storage ou Azure Blob
👨‍💻 Auteur

Amar Malam Sahirou
🎓 Ingénieur Cloud & Réseaux — CRMN (Centre de Recherche en Microélectronique et Nanotechnologies)
📧 amar232.sahi@gmail.com

🌐 LinkedIn
📜 Licence

Projet distribué sous la licence MIT.
Vous êtes libre de l’utiliser, le modifier et le redistribuer à des fins éducatives ou open source.
🌾 Vision

    “Apporter l’intelligence artificielle au service de l’agriculture africaine.”
    — FungiScan AI Team
