import React from 'react'

function Button({name, style}) {
  
  return (
    <div>
      <button style={style}>
        {name}
      </button>
    </div>
  )
}

export default Button;