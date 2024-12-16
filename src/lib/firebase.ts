import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBMHv21KLL2hqeQxwhW0yY0nlp1ZTXH8xU",
  authDomain: "altitude-expert.firebaseapp.com",
  projectId: "altitude-expert",
  storageBucket: "altitude-expert.firebasestorage.app",
  messagingSenderId: "471337751066",
  appId: "1:471337751066:web:363893bfdf0f7e73dbf7a3",
  measurementId: "G-G0TQNYVPEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Log initialization
console.log('Firebase initialized successfully');

export default app;