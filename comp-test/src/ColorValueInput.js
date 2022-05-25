import React from 'react'

const ColorValueInput = ({color, setColor}) => {
  return (
    <div style={{marginBottom: 10}}>
      <input placeholder='Add color name' value={color}
      onChange={(e) => setColor(e.target.value)}></input>
    </div>
  )
}

export default ColorValueInput