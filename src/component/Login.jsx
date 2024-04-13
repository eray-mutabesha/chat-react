import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword} from 'firebase/auth';
import { Link } from 'react-router-dom';
import {signInWithPopup} from 'firebase/auth';
import { auth,provider } from '../fire';
import Tchat from './Tchat';
import '../component/css.files/LoginPage.css';



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
    <div className='login_all_div'>
    {value?<Tchat/>:
    <div className='black_div'>
      <div className='flex'>
        <div className='text_div'>
          <h1>Welcome Again</h1>
          <p>Lorem ipsum, dolor sit amet incidunt placeat totam nesciunt ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure, veniam, earum accusantium optio est dolorum delectus quas veritatis, recusandae asperiores! Ex quos ullam obcaecati vel magni eligendi dicta architecto.</p>
        </div>
        <div className='login_div'>
        <form action="" onSubmit={handlesubmit}>
        <h1>login page</h1>
        <input type="email" 
        placeholder='Enter your email adress' 
        onChange={handlechangeMail}
        />
        <input type="password"
         placeholder='Create pass word'
         onChange={handlechangePassword}
        />
        <nav>
        <button type='submit'>Login</button>
        <button onClick={signingoogle}>Login with google</button> 
        </nav>
        
        </form>
        <div className='links'>
        <Link to={'/signup'}><p>Don't have an acount? Sign up</p></Link><br></br>
        <Link to={'/'}><p>Back to hoem page</p></Link>
        </div>
        
      </div>
      </div>
    
    </div>}
    </div>
  )
}

export default Login
