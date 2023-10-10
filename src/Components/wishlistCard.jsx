import React from 'react'
import wishlistImg from '../asset/images/wishlist.png'
import { Icon } from "@iconify/react";
import '../asset/styles/wishlistCard.css'

function WishlistCard() {
  return (
    <div className='flex flex-col gap-8 wlc-main'>
      <div className='w-full'>
        <img src={wishlistImg} alt="" />
      </div>
      <div className='w-full flex flex-row gap-4 items-center'>
        <h3>Gasgos Jnr Farm</h3>
        <Icon icon="ic:sharp-verified" color="white" width="32" height="32" />
      </div>
      <h3>11 Pedigree Ijebu Breeding Cow</h3>
    </div>
  )
}

export default WishlistCard