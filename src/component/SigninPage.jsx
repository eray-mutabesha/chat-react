import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom"; 
import React, { useEffect, useState } from 'react';
import {signInWithPopup} from 'firebase/auth';
import { auth,provider } from '../fire';
import Tchat from './Tchat';
import { Link } from 'react-router-dom';



function SigninPage() {
  const navigate=useNavigate();
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
const email=emaile;
const password=passworde;
createUserWithEmailAndPassword(auth,email,password).then(data=>{
  navigate('/tchat');
  console.log(data,"authData");

})
}
// ............................google................................
// ..................................................................
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
// ..................................................................
// ..................................................................
  return (
    <>
    {
    value?<Tchat />: <div>
    <h1>login with your mail</h1>
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
  {/* -----------------------------google------------------------------ */}

  <button onClick={signingoogle}>signin with google</button> 
  <Link to={'/signup'}>Don't have an acount ? Sign up</Link><br></br>
  <Link to={'/'}>Back to hoem page</Link>
  </div>
  }
   </>
  )
}

export default SigninPage
