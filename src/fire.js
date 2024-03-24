import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'


const firebaseConfig = { 
 
  
};

const app = initializeApp ( firebaseConfig );
firebase.initializeApp(firebaseConfig)
const auth=getAuth(app);
const provider =new GoogleAuthProvider();

export {auth,provider};
export const dataRef=firebase.database()
export default firebase;

