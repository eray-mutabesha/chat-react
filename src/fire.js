
import { initializeApp } from "firebase/app" ;   
import { getAuth,GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = { 
  apiKey : "AIzaSyDY7rvVdPPN-gOnAT1wvZE_LdwRi9CZt2Q" , 
  authDomain : "chat-react-3f219.firebaseapp.com" , 
  projectId : "chat-react-3f219" , 
  storageBucket : "chat-react-3f219.appspot.com" , 
  messagingSenderId : "510136929114" , 
  appId : "1:510136929114:web:b540e5c303293637758163" , 
  measurementId : "G-QTH6L20M4Q" 
};


const app = initializeApp ( firebaseConfig );
const auth=getAuth(app)
const provider =new GoogleAuthProvider()
export {auth,provider}