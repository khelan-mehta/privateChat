
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8QEdF6Q5Vpa4Qut1ui8j_H-i-ZItEfWE",
  authDomain: "auth-test-react-firebase.firebaseapp.com",
  projectId: "auth-test-react-firebase",
  storageBucket: "auth-test-react-firebase.firebasestorage.app",
  messagingSenderId: "809242978140",
  appId: "1:809242978140:web:1f5f549cc9b872cf69c399"
};

// Check if Firebase is properly configured
const isFirebaseConfigured = () => {
  return firebaseConfig.apiKey && 
         firebaseConfig.authDomain && 
         firebaseConfig.projectId;
};

// Only initialize Firebase if it's properly configured
let app: any = null;
let auth: any = null;
let db: any = null;

if (isFirebaseConfigured()) {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
  
  // Initialize Cloud Firestore and get a reference to the service
  db = getFirestore(app);
}

export { auth, db, isFirebaseConfigured };
export default app;
