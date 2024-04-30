import React, { useEffect, useId, useState } from 'react';
import {collection, onSnapshot ,query ,orderBy,deleteDoc,doc} from "firebase/firestore";
import { auth, db } from '../firebase';
import '../component/css.files/RealTime.css';
import Addmessages from './Addmessages';


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


 let {uid}=auth.currentUser
// .........................................
  return (
    <section>
    <div className='all_elements'>
      <h1>the real time data base</h1>
     
      <div>
        {message.map(mess=>(
         <div>

          <div key={mess.id} className={`message ${mess.data.userID==uid?"sent" : "receive"}`}>
            <img src={mess.data.user} alt="img"/>
            <span>{mess.data.text}</span>
            
            <button onClick={()=>handledelete(mess.id)}>delete</button>
            </div>
          </div>
            
        ))}
      </div>
      <button onClick={logout}>Log out</button>
      <Addmessages />

    </div>
    </section>
  )
}

export default RealTime
