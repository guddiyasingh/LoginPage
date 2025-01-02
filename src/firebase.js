// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl97f4RIcZY4Vc7-KhJdf1rAAzXF1_KzI",
  authDomain: "authitication-e0dd6.firebaseapp.com",
  projectId: "authitication-e0dd6",
  storageBucket: "authitication-e0dd6.firebasestorage.app",
  messagingSenderId: "558834741862",
  appId: "1:558834741862:web:3a79148edcbd4af8def3a7"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {auth} 