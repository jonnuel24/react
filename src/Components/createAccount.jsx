import React from 'react'


function createAccount() {
  return (
    <div className='flex flex-col div'>

        <div className='flex flex-col items-start div-up'>
          <img src={Logo} alt="" className='logo' />
          <h1>Let’s get Started</h1>
        </div>

        <div className='flex flex-col cta'>
          <button className="btn1">
          Create an Account 
          </button>

          <button className="btn2">
          Login to Account 
          </button>

        </div>
      </div>
  )
}

export default createAccount