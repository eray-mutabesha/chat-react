import React, { useEffect, useState } from 'react';
import {collection, onSnapshot ,query ,orderBy} from "firebase/firestore";
import { db } from '../firebase';
 


function RealTime() {

  const mesRef=collection(db,"messages")
  

  const [message,setMessage]=useState([]);
  useEffect(()=>{
    const q=query(mesRef,orderBy("time","asc"))
    const unsubscrub = onSnapshot(q,snapshot=>{
      setMessage(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
    })
return ()=>{
  unsubscrub()
}},[])

  return (
    <div>
      <h1>real time data base</h1>
      <ul>
        {message.map(mess=>(
          <li key={mess.id}>
            {mess.id}:{mess.data.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RealTime
