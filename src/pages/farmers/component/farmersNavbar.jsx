import React from 'react'
import Logo from "../../../asset/images/Logo (white).svg"
import "../../../asset/styles/farmersNabar.css"

function FNavbar() {
  return (
    <div>
      <div className='fnav bg-[#000000] px-32 py-6 w-full'>
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}

export default FNavbar