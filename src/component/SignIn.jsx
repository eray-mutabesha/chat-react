import React, { useEffect, useState } from 'react';
import {signInWithPopup} from 'firebase/auth';
import { auth,provider } from '../fire';
import Tchat from '../component/Tchat';
import '../component/css.files/Signin.css'
import { useNavigate } from "react-router-dom"; 



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
 const navigate = useNavigate(); 
 const toSigninPage=()=>{
  alert("hello")
  navigate('/signinPages');
 }
  return (   
    <>
      
      {value?<Tchat /> : <div className="body">
        <div className='as_body'>
        <header>
          <div>
            <h1>MasoloApp</h1>
          <select>
          <option value="">En</option>
          <option value="">Fr</option>
         </select>
          </div>
          <div>
          
        <button onClick={signingoogle}>sign in with google</button> 
        <button>Signin with Email</button>
          </div>

        </header>
          <div className='flex_div'>
          <div className='flex_div_one'>
              <h1>Masolo: Connecting Hearts, One Message at a Time😎</h1>
              <p>Explore new friendships and enriching conversations on Masolo - where every message builds unique connections.Be part of a vibrant community where your thoughts matter, feelings are shared, and relationships flourish. Stay connected on <strong>MasoloApp</strong></p>
              <nav><button className='google_btn' onClick={toSigninPage}>sign in to your acount</button> </nav>
          </div>
          <div className='flex_div_two'>
          <img src="—Pngtree—cute blue watercolour message box_6978971.png" alt="" />
          </div>
          </div>
         
         </div>
        
      </div>   }
      </>
    
  )
}

export default SignIn
