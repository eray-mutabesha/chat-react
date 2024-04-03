import React, { useEffect, useState } from 'react';
import {collection, onSnapshot ,query ,orderBy} from "firebase/firestore";
import { auth, db } from '../firebase';
import '../component/all.css';
function RealTime() {

  const mesRef=collection(db,"messages");
  const [message,setMessage]=useState([]);
  useEffect(()=>{
    const q=query(mesRef,orderBy("time","asc"));
    const unsubscrub = onSnapshot(q,snapshot=>{
      setMessage(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})));
    })
return ()=>{
  unsubscrub();
}},[])

const logout=()=>{
  localStorage.clear();
  window.location.reload();
}

  return (
    <div>
      <h1>the real time data base</h1>
     
      <div>
        {message.map(mess=>(
         <div>

           <div key={mess.id}  className={` "messageSent"${mess.data.userID==auth.currentUser ? "sent" : "receve"}`}>
            {mess.data.text}
            <img src={mess.data.user}/>
            </div>

         </div>
            
        ))}
      </div>
      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default RealTime
