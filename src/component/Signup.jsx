import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom"; 
import React, { useState } from 'react';
import { auth} from '../fire';
import { Link } from 'react-router-dom';
import '../component/css.files/LoginPage.css';
import toast from 'react-hot-toast';


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
toast.success("Account successful created")
})
}
catch{
  toast.error("The emailAdress is already used !!")
}

}

// ..................................................................
// ..................................................................
  return (
    
     <div className='login_all_div'>
      <div  className='black_div'>
        <div className='flex'>
        <div className='text_div'>
          <h1>Create an acount</h1>
          <p>Lorem ipsum, dolor sit amet incidunt placeat totam nesciunt ducimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure, veniam, earum accusantium optio est dolorum delectus quas veritatis, recusandae asperiores! Ex quos ullam obcaecati vel magni eligendi dicta architecto.</p>
        </div>
        <div className='login_div'>
       
    <form action="" onSubmit={handlesubmit}>
    <h1>Sign up</h1>
    <input type="email" 
    placeholder='Enter your email adress' 
    onChange={handlechangeMail}
    />
    <input type="password"
     placeholder='Create pass word'
    onChange={handlechangePassword}
     />
     <nav>
     <button type='submit'>Valide</button>
     </nav>
    
    </form>
        <div className='links'>
        <Link to={'/login'}><p>Already have an account? Login</p></Link><br></br>
        <Link to={'/'}><p>Back to hoem page</p></Link>
        </div>
        </div>
       
        </div>
     
      </div>
  
  </div>
  
  
  )
}

export default SigninPage
