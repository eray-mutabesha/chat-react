import React from 'react'

function Protected() {
    const token=localStorage.getItem('token');
  return (
    <div>
      {token?<outle/>:navigate('/tchat')}
    </div>
  )
}

export default Protected
