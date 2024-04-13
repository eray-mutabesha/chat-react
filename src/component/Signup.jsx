import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom"; 
import React, { useState } from 'react';
import { auth} from '../fire';
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
const handlesubmit= async (e)=>{
 e.preventDefault();
const email=emaile;
const password=passworde;

try{
await createUserWithEmailAndPassword(auth,email,password).then(data=>{
  navigate('/tchat');
  console.log(data,"authData");

})
}
catch{
  alert("The emailAdress is already used !!")
}

}

// ..................................................................
// ..................................................................
  return (
    <>
    
     <div>
    <h1>create an acount with your mail</h1>
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

  <Link to={'/login'}> Already have an account? Login</Link><br></br>
  <Link to={'/'}>Back to hoem page</Link>
  </div>
  
   </>
  )
}

export default SigninPage
