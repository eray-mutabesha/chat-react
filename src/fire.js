import { initializeApp } from "firebase/app" ;   
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'


const firebaseConfig = { 
  apiKey: "AIzaSyA7Sjg8Wg-vyjnfPCTgttLJJy9wgUN5Knc",
  authDomain: "new-app-8c559.firebaseapp.com",
  projectId: "new-app-8c559",
  storageBucket: "new-app-8c559.appspot.com",
  messagingSenderId: "500056040713",
  appId: "1:500056040713:web:2f6eae3eca5ec60aec9fd8",
  measurementId: "G-XR7L4RYC59"
  
};


const app = initializeApp ( firebaseConfig );
firebase.initializeApp(firebaseConfig)
const auth=getAuth(app);
const provider =new GoogleAuthProvider();
export {auth,provider};
export const dataRef=firebase.database()
export default firebase;

