import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom"; 
import React, { useState } from 'react';
import { auth} from '../fire';
import { Link } from 'react-router-dom';
import '../component/css.files/LoginPage.css';
import toast from 'react-hot-toast';
import { useForm} from "react-hook-form"

function SigninPage() {
  const navigate=useNavigate();
  const { handleSubmit,register,formState: { errors }} = useForm()

  
  const onSubmit =async(data)=>{
    try{
      const email=data.email
      const password=data.passworduser
      console.log(email)
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
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign up</h1>
        <p ></p>
         <input 
             placeholder="Enter your email" 
           
         {...register("email", {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })} type="email" />
        {errors.email && (
        <span style={{ color: 'red' }}>{errors.email.message}</span>
      )}
        
        <input type="password" 
        placeholder="Enter your password"  
     
        {...register("passworduser",{
        minLength:{value:6,message:"Your password must have 6 characteres"}})}/>
      {errors.passworduser && (
        <span style={{ color: 'red' }}>{errors.passworduser.message}</span>
      )}
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
