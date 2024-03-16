import React from 'react'

function Tchat() {

const logout=()=>{
 localStorage.clear()
 window.location.reload()
}

  return (
    <div>
      <h1>tchat</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Tchat
