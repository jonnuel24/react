import React from 'react'
import Cattle from '../asset/images/cattle.svg'
import Farmer from '../asset/images/farmer.svg'
import '../asset/styles/card.css'

function Card() {
  return (
    <div className='flex flex-col card h-auto items-center'>
      <div className='cattle bg-cover bg-no-repeat'>

      </div>

      <div className='flex information flex-row justify-between'>

        <div className='flex  flex-col items-start justify-between'>
          <h3 className='description text-start'>11 Pedigree Sussex Breeding Cows with Calves at Foot</h3>
          <h1 className='price'>N56,000 <span>/ uniT</span></h1>

          <div className='flex justify-between'>
            <button className='btn btn-danger'>30% off</button>
            <button className='btn btn-success'>14 months</button>
            <button className='btn btn-secondary'>Sagamulga</button>
          </div>
        </div>


        <div className='flex flex-col'>
          <img src={Farmer} alt="" />
          <button className='btn'>ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default Card;