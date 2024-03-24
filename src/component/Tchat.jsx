import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../fire'



function Tchat() {
const [message,setmessage]=useState("")
const [newvalue,setnewvalue]=useState([])
const handleadd=(e)=>{
 setmessage(e.target.value)
}

const handlesend=()=>{
  if(message!==""){
    db.ref().child("messages").push(message)
    setmessage("")
  }
}
useEffect(()=>{
  db.ref().child("messages").on("value",data=>{
    const getdata=Object.values(data.val())
    setnewvalue(getdata)
  })
})
const logout=()=>{
 localStorage.clear()
 window.location.reload()
}

  return (
    <div>
       <input type="text" placeholder='write a message' onChange={handleadd}/>
       <button onClick={handlesend}>send</button>
      <button onClick={logout}>LOGOUT</button>
      {newvalue.map((valeur,i)=><p key={i}>{valeur}</p>)}
    </div>
  )
}

export default Tchat

