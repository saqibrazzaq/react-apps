import React from 'react'

const Box = ({color}) => {
  return (
    <div className='ColorBox' style={{backgroundColor: color}}>
      {color ? color : "Empty Value"}
    </div>
  )
}

export default Box