import React from 'react'
import { useState } from 'react'
import { collection,addDoc,serverTimestamp} from "firebase/firestore"; 
import { db } from '../firebase';

function Addmessages() {
   const [messageSent,setMessagesent]=useState("");
// pushing data
const handlesend=(e)=>{
    setMessagesent(e.target.value);
}
const handlesubmit=(e)=>{
   e.preventDefault()
   if(messageSent !==""){
      const timestemp=serverTimestamp();
      const messageSentInfirebase=collection(db,'messages');
      addDoc(messageSentInfirebase,{text:messageSent,time:timestemp}).then(response=>{
        console.log(response)
      }).catch(error=>{
        console.log(error);
      })
   }
  }
  return (
    <div>
      <h1>add messages</h1>
      <form onSubmit={handlesubmit}>
      <input type="text" id={messageSent} value={messageSent} onChange={handlesend}/>
      <button type='submit'>send message</button>
      </form>
    </div>
  )
}

export default Addmessages
