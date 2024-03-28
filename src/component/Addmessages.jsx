import React from 'react'
import { useState } from 'react'
function Addmessages() {
   const [messageSent,setMessagesent]=useState("")
// pushing data
const handlesend=(e)=>{
    setMessagesent(e.target.value)
}
  return (
    <div>
      <h1>add messages</h1>
      <form>
      <input type="text" id={messageSent} value={messageSent} onChange={handlesend}/>
      <button type='submit'>send message</button>
      </form>
    </div>
  )
}

export default Addmessages
