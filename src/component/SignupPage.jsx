import React, { useState } from 'react'


function SignupPage() {
    const [emailsent,setEmailsent]=useState();
    const [passwordsent,setPasswordsent]=useState();
    const handlechangeMail=(e)=>{
        setEmailsent(e.target.value);
    }
    const handlechangePassword=(e)=>{
        setPasswordsent(e.target.value);
    }

    const handlesubmit= async (e)=>{
        e.preventDefault();
       try{
        const userCreated= await createUserWithEmailAndPassword(auth,email,password).then(data=>{
           console.log(userCreated);
           const user=userCreated.user;
           
        })
       }catch(error){
        console.log(error);
       }
      
       }


  return (
    <div>
      <h1>sign up page</h1>
    <form action="" onSubmit={handlesubmit}>
    <input type="email" 
    placeholder='Enter your email adress' 
    onChange={handlechangeMail}
    />
    <input type="password"
     placeholder='Create pass word'
    onChange={handlechangePassword}
     />
    <button type='submit'>Sign up</button>
    </form>
    </div>
  )
}

export default SignupPage
