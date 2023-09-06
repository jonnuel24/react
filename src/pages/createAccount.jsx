import React from 'react'
import Onboard from '../asset/styles/createAccount.css'
import Logo from '../asset/images/logo.svg'
import Drop from '../asset/images/drop-img.svg'

function createAccount() {
  return (
    <div className='flex flex-col items-center justify-center main-div overflow-hidden'>
      <div className='flex flex-col div'>

        <div className='flex flex-col items-start div-up'>
          <img src={Logo} alt="" className='logo' />
        </div>

        <div className='flex flex-col cta'>
          <button className="btn2 font-sans">
          Create Account as <strong>Farmer</strong>  
          </button>

          <button className="btn2 font-sans">
          Create Account as <strong>User</strong> 
          </button>

        </div>

        <div className='flex flex-col items-end'>
          <h1 className='font-sans'>Already a member? <a href="" className='font-sans text-green-800'>Login</a></h1>
          
        </div>
      </div>

      <img src={Drop} alt="" className='drop-img' />
      
    </div>
  )
}

export default createAccount
