import React, { useEffect, useState } from 'react';
import {collection, onSnapshot ,query ,orderBy,deleteDoc,doc} from "firebase/firestore";
import { auth, db } from '../firebase';
import '../component/css.files/RealTime.css';

function RealTime() {
// get datas from firebase.......................
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
// .............................................
// log out......................................
const logout=()=>{
  localStorage.clear();
  window.location.reload();
}
// ...............................................
// delete message ...................
const handledelete=(id)=>{
  const docRef=doc(db,"messages",id);
  deleteDoc(docRef).then(response=>{
    console.log(response)
  }).catch(error=>{
    console.log(error)
  })
}
// .........................................
  return (
    <div>
      <h1>the real time data base</h1>
     
      <div>
        {message.map(mess=>(
         <div>

          <div key={mess.id} className={` messageSent ${mess.data.userID===auth.currentUser ? "sent" : "receve"}`}>
            <img src={mess.data.user} alt="img" />
            {mess.data.text}
            <button onClick={()=>handledelete(mess.id)}>delete</button>
            </div>

          </div>
            
        ))}
      </div>
      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default RealTime
