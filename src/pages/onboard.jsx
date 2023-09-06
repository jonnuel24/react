import React from 'react'
import Onboard from '../asset/styles/onboard.css'
import Logo from '../asset/images/logo.svg'
import Drop from '../asset/images/drop-img.svg'

function onboard() {
  return (
    <div className='flex flex-col items-center justify-center main-div'>
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

      <img src={Drop} alt="" className='drop-img' />
      
    </div>
  )
}

export default onboard