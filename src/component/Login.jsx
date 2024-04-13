import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword} from 'firebase/auth';
import { Link } from 'react-router-dom';
import {signInWithPopup} from 'firebase/auth';
import { auth,provider } from '../fire';
import Tchat from './Tchat';

function Login() {
 

  const navigate=useNavigate();
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");

   
     const handlechangeMail=(e)=>{
      setEmail(e.target.value);
     }
     const handlechangePassword=(e)=>{
      setPassword(e.target.value);
     }

    const handlesubmit = async (e)=>{
        e.preventDefault();
     
        try{
          await signInWithEmailAndPassword(auth,email,password).then(data=>{
            navigate('/tchat');
            console.log(data,"authData");
          
          })
          }
          catch{
            alert("Incorrect email or password")
          }
      
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

  return (
    <>
    {value?<Tchat/>:
    <div>
      <h1>login page</h1>
    <form action="" onSubmit={handlesubmit}>
    <input type="email" 
    placeholder='Enter your email adress' 
    onChange={handlechangeMail}
    />
    <input type="password"
     placeholder='Create pass word'
    onChange={handlechangePassword}
     />
    <button type='submit'>Login</button>
    <button onClick={signingoogle}>Login with google</button> 
    </form>
    <Link to={'/signup'}>Don't have an acount? Sign up</Link><br></br>
  <Link to={'/'}>Back to hoem page</Link>
    </div>}
    </>
  )
}

export default Login
