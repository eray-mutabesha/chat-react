import React from 'react'

function Tchat() {
const logout=()=>{
 localStorage.clear()
 window.location.reload()
}
  return (
    <div>
      <form action="">
        <h1>name of a user</h1>
        <input type="text" placeholder='write a message'/>
        <button>send</button>
      </form>
      
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Tchat
