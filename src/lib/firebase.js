// Firebase configuration - Enabled Firebase integration
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBExample-Replace-With-Your-API-Key",
  authDomain: "copilot-roi-calculator.firebaseapp.com",
  projectId: "copilot-roi-calculator",
  storageBucket: "copilot-roi-calculator.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Initialize Analytics only if supported
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };

// Helper function to check if Firebase is available
export const isFirebaseAvailable = () => {
  return db !== null && auth !== null;
};

// Default export for compatibility
export default {
  db,
  auth,
  storage,
  analytics,
  isAvailable: isFirebaseAvailable
};