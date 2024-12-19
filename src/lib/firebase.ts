import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYpDxWqqXw9NBpXOxUj0CvDH_BaZS7Ync",
  authDomain: "aviation-quiz-app-2024.firebaseapp.com",
  projectId: "aviation-quiz-app-2024",
  storageBucket: "aviation-quiz-app-2024.appspot.com",
  messagingSenderId: "1098765432",
  appId: "1:1098765432:web:abcdef1234567890",
  measurementId: "G-ABCDEF1234"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Analytics only if supported
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

console.log("Firebase initialized successfully");

export { app, auth, analytics };