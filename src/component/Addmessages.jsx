import React from 'react'
import { useState } from 'react'
import { collection,addDoc,serverTimestamp} from "firebase/firestore"; 
import { db } from '../firebase';
import { auth } from '../firebase';

function Addmessages() {
   const [messageSent,setMessagesent]=useState("");
// pushing data in to fire base
const handlesend=(e)=>{
    setMessagesent(e.target.value);
}
const handlesubmit=(e)=>{
   e.preventDefault()
   if(messageSent !==""){
    
     let {uid,photoURL}=auth.currentUser;
    
      const timestemp=serverTimestamp();
      const messageSentInfirebase=collection(db,'messages');
      addDoc(messageSentInfirebase,{text:messageSent,user:photoURL,userID:uid,time:timestemp}).then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error);
      })
      setMessagesent("")
   }
  }

  return (
    
      <form onSubmit={handlesubmit}>
      <input className='send_inp' type="text" id={messageSent} value={messageSent} onChange={handlesend}/>
      <button type='submit'>send message</button>
      </form>
  
  )
}

export default Addmessages
