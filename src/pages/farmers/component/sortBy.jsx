import React from 'react'
import "../../../asset/styles/sortby.css"
import { Icon } from "@iconify/react";


function SortBy(){
  return (
    <div className="sortby">
      <Icon icon="octicon:filter-16" color="#909090" width="24" height="24" />
      <h3 className='text-center text-[#5D5D5D] text-[16px] mb-0 font-normal'>Sort by</h3>
    </div>
  )
}

export default SortBy;