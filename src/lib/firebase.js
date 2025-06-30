// Firebase configuration - Optional Firebase integration
// This module is designed to fail gracefully if Firebase is not configured

let db = null;
let auth = null;
let storage = null;
let analytics = null;

// Check if Firebase should be enabled
const FIREBASE_ENABLED = false; // Set to true when you want to enable Firebase

if (FIREBASE_ENABLED) {
  try {
    // Only import Firebase when enabled
    const { initializeApp } = await import('firebase/app');
    const { getFirestore } = await import('firebase/firestore');
    const { getAnalytics, isSupported } = await import('firebase/analytics');
    const { getAuth } = await import('firebase/auth');
    const { getStorage } = await import('firebase/storage');

    // Firebase configuration
    const firebaseConfig = {
      apiKey: "your-api-key",
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
    db = getFirestore(app);
    auth = getAuth(app);
    storage = getStorage(app);
    
    // Initialize Analytics only if supported
    if (typeof window !== 'undefined') {
      const analyticsSupported = await isSupported();
      if (analyticsSupported) {
        analytics = getAnalytics(app);
      }
    }
  } catch (error) {
    console.log('Firebase not configured or disabled:', error.message);
  }
}

// Export Firebase services (will be null if not configured)
export { db, auth, storage, analytics };

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