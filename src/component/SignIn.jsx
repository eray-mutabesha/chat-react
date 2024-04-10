
import '../component/css.files/Signin.css'
import { useNavigate } from "react-router-dom"; 



function SignIn() {
    
 const navigate = useNavigate(); 
 const toSigninPage=()=>{
  
  navigate('/signinPages');
 }
  return (   
    <>
      
   <div className="body">
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
          
        <button>sign in with google</button> 
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
        
      </div>   
      </>
    
  )
}

export default SignIn
