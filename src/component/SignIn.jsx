import React, { useEffect, useState } from 'react';
import {signInWithPopup} from 'firebase/auth';
 import { auth,provider } from '../fire';
import Tchat from '../component/Tchat'

function SignIn() {
    const [value,setValue]=useState("")
    const signingoogle=()=>{
  
 signInWithPopup(auth,provider).then((data)=>{
     setValue(data.user.email)
    localStorage.setItem("email",data.user.email)
  })
 }

 useEffect(()=>{
    setValue(localStorage.getItem("email"))
 })

  return (
    <div>
        <h1>sign in page</h1>
       {value?<Tchat />:<button onClick={signingoogle}>sign in with google</button> }
      
      
      
    </div>
  )
}

export default SignIn
