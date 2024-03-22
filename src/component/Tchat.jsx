import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../fire'
// import { orderBy, limit } from "firebase/firestore";  


function Tchat() {
const [messages,setmessages]=useState([])
useEffect(()=>{
   db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot=>{
    setmessages(snapshot.docs.map(doc=>doc.data()))
   })
  },[])
 
// ---------------------Log out section--------------------
 const logout=()=>{
  localStorage.clear()
  window.location.reload()
 }

  return (
    <div>
       
     <button onClick={logout}>LOGOUT</button>
      
      {messages.map(({id,Text,photoURL})=>{
        <div key={id}>
           <img src={photoURL} alt=''/>
           <p>{Text}</p>
        </div>
      }
      )}

    </div>
  )
}

export default Tchat
