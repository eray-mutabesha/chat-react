import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = { 
        apiKey : "AIzaSyDZprb99CrA3Fz9Qn-GSOpnxIAyYSdE9Yc" , 
        authDomain : "reacttchat-174c5.firebaseapp.com" , 
        projectId : "reacttchat-174c5" , 
        storageBucket : "reacttchat-174c5.appspot.com" , 
        messagingSenderId : "391125753662" , 
        appId : "1:391125753662:web:3246c3c0136aaf1329d66f" 
      
    }

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    export {db}