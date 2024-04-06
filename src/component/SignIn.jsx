import React, { useEffect, useState } from 'react';
import {signInWithPopup} from 'firebase/auth';
import { auth,provider } from '../fire';
import Tchat from '../component/Tchat';
import '../component/css.files/Signin.css'

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
  return (   
    <>
      
      {value?<Tchat /> : <div className="body">
        <div className='as_body'>
        <header>
          <div><h1>MasoloApp</h1></div>
          <div>
          <select>
          <option value="langue">Language</option>
          <option value="">Englais</option>
          <option value="">Francais</option>
         </select>
        <button onClick={signingoogle}>sign in with google</button> 
        <button>Sign Up</button>
          </div>

        </header>
          <div className='flex_div'>
          <div>
              <h1>Lorem, ipsum dolor sit amet consectetur adipisicing eli ipsum dolor sit ame</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, veritatis natus. Excepturi quas maiores consectetur! Iste, nobis recusandae culpa aperiam nihil, laboriosam molestias facere nostrum debitis, repudiandae perspiciatis delectus veritatis.</p>
          </div>
          <div>
          <img src="—Pngtree—cute blue watercolour message box_6978971.png" alt="" />
          </div>
          </div>
         
         </div>
        
      </div>   }
      </>
    
  )
}

export default SignIn
