import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALT8mvTFBnRwgvbujGlYltuEyQi65knWI",
  authDomain: "whiteboardcollab-e02db.firebaseapp.com",
  projectId: "whiteboardcollab-e02db",
  storageBucket: "whiteboardcollab-e02db.appspot.com",
  messagingSenderId: "752257678199",
  appId: "1:752257678199:web:9c37ba7db4e4f521973f72",
  measurementId: "G-LZCWGP308Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
