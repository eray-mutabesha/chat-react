import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../fire';
import { db } from '../firebase';

function SigninPage() {
  const [emaile,setEmail]=useState("");
  const [passworde,setPassword]=useState("");
  const handlechangeMail=(e)=>{
    setEmail(e.target.value);
  }

  const handlechangePassword=(e)=>{
  setPassword(e.target.value);
  }
const handlesubmit=(e)=>{
 e.preventDefault();
const email=emaile
const password=passworde;
createUserWithEmailAndPassword(auth,email,password).then(data=>{
  console.log(data,"authData");
})
}

  return (
    <div>
      <h1>creat an acount</h1>
      <form action="" onSubmit={handlesubmit}>
      <input type="email" 
      placeholder='Enter your email adress' 
      onChange={handlechangeMail}
      />

      <input type="password"
       placeholder='Create pass word'
      onChange={handlechangePassword}
       />
      <button type='submit'>Signin</button>
      </form>
  
      
    </div>
  )
}

export default SigninPage
