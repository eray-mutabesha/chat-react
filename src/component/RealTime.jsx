import React, { useEffect, useId, useState } from 'react';
import {collection, onSnapshot ,query ,orderBy,deleteDoc,doc} from "firebase/firestore";
import { auth, db } from '../firebase';
import '../component/css.files/RealTime.css';
import Addmessages from './Addmessages';
import { isEmpty } from '../../utils';

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


 let user=auth.currentUser;
 let {uid}= !isEmpty(user)&&user;

// ...........................................................................................................
  return (
    <section>
    <div className='all_elements'>
      <h1>Start your tchat</h1>
     
      <div>
        {message.map(mess=>(

         <div className='map_div'>
          <div key={mess.id} className={`message ${mess.data.userID == uid?"sent" : "receive"}`}>
            <div>
              <img src={mess.data.user} alt="img"/>
              <p>{mess.data.text}</p>
              <button className='btn_delete' onClick={()=>handledelete(mess.id)}>delete</button>
            </div>
            </div>
          </div>

        ))}
      </div>
      <div className='fixed'>
      <button onClick={logout}className='logout'>Log out</button>
      <Addmessages />
      
      </div>
      

    </div>
    </section>
  )
}

export default RealTime
