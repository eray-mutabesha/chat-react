import React from 'react'
import { db } from '../firebase'
import { useState,useEffect } from 'react';
import { collection, doc, getDocs,deleteDoc } from "firebase/firestore"; 
import Addmessages from './Addmessages';

function Tchat() {

 const [messages,setMessages]=useState([])
 useEffect(()=>{
  getmessages()
 },[])


  useEffect(()=>{
    console.log(messages)
 },[messages])


 function getmessages(){

  const collectionRef=collection(db,'messages')
  getDocs(collectionRef).then(response=>{
  const messagefromFirebase=response.docs.map(doc=>(
    {
      data:doc.data(),
      id:doc.id,
    }
  ))
  setMessages(messagefromFirebase)
  }).catch(error=>console.log(error.message))
 }

const handledelete=(id)=>{
  
  const docRef=doc(db,"messages",id);
  deleteDoc(docRef).then(response=>{
    console.log(response)
  }).catch(error=>{
    console.log(error)
  })
}

  return (
    <>
    <h1>hello</h1>
    <button onClick={()=>getmessages()}>Refresh</button>
    <ul>{messages.map(mess=><li key={mess.id}>{mess.data.text} 
    <button onClick={()=>handledelete(mess.id)}>delete</button></li>)}</ul>
    <Addmessages />
    </>
    
     
    
  )
}

export default Tchat

