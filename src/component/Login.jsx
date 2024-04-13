import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../fire';
import { Link } from 'react-router-dom';
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


  return (
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
    <button type='submit'>Login into your acount</button>
     
    </form>
    <Link to={'/signup'}>Don't have an acount ? Sign up</Link><br></br>
  <Link to={'/'}>Back to hoem page</Link>
    </div>
  )
}

export default Login
