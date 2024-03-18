import React from 'react'
function Tchat() {
const logout=()=>{
 localStorage.clear()
 window.location.reload()
}
const handleclick=(e)=>{
  alert("clicked")
}
  return (
    <div>
        <h1>name of a user</h1>
        <input type="text" placeholder='write a message'/>
        <button onClick={handleclick}>send</button>
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Tchat
