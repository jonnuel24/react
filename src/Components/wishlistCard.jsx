import React from 'react'
import wishlistImg from '../asset/images/wishlist.png'
import { Icon } from "@iconify/react";
import '../asset/styles/wishlistCard.css'

function WishlistCard() {
  return (
    <div className='flex flex-col gap-2 wlc-main'>
      <div className='wlc-img'>
        <img src={wishlistImg} alt="" />
      </div>
      <div className=' flex flex-row px-2 items-center wlc-verify'>
        <h3 className='wlc-h4 mt-2'>Gasgos Jnr Farm</h3>
        <Icon icon="ic:sharp-verified" color="white" width="32" height="32" />
      </div>
      <h3 className='wlc-h3 text-left'>11 Pedigree Ijebu <br></br> Breeding Cow</h3>
    </div>
  )
}

export default WishlistCard