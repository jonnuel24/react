import React from 'react'

function Picon(props) {
  const {width, height, color } = props;
  const ellipseStyle = {
    width: width,
    height: height,
    backgroundColor: color,
    borderRadius: '50%',
  }
  return (

    <div style={ellipseStyle}>
    </div>
  )
}

export default Picon;