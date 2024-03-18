import React from 'react'

function Input_field({label, placeholder,name}){
  
  const inputStyle ={
    height : "48px",
    borderRadius : "8px",
    border : "0.9px solid black",
    width : "400px",
  }

  return (
    <div className="flex flex-col items-start">
                  <label htmlFor="input" className="font-normal text-[15px]">{label}</label>
                  <input type="text" text-bold placeholder={placeholder} style={inputStyle} name={name} />
                </div>
  )
}

export default Input_field