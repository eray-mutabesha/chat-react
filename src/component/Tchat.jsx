import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../firebase'
import { collection } from '@firebase/firestore'

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

return(
  <>
  <button onClick={logout}>LOGOUT</button>
   {messages.map(({ id, text, photoURL }) => 
  <nav key={id}>
    <img src={photoURL} alt='photos' />
    <p>{text}</p>
  </nav>
)}
  </>
)

}

export default Tchat
