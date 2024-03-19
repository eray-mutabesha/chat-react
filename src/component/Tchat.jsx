import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../fire'
import { addDoc,doc,collection, collection } from 'firebase/firestore'


function Tchat() {
const [message,setmessage]=useState([])



const logout=()=>{
 localStorage.clear()
 window.location.reload()
}

const handleclick=(e)=>{
  const val=doc(db,"blog","post")
  const collection=collection(val,"feedback")


}
  return (
    <div>
       
        <input type="text" placeholder='write a message'/>
        <button onClick={handleclick}>send</button>
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Tchat
