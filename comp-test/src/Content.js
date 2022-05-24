import React from 'react'

const Content = () => {

  const handleNameChange = () => {
    const names = ['Saqib', 'Shaheer', 'Rabia'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleClick = () => {
    console.log('You clicked it.');
  }

  const handleClick2 = (name) => {
    console.log(`${name} clicked it.`);
  }

  const handleClick3 = (e) => {
    console.log(e.target);
  }

  return (
    <main>
      <p onDoubleClick={(e) => handleClick3(e)}>
        Hello {handleNameChange()}!
      </p>

      <button onClick={(e) => handleClick3(e)}>Click it</button>
    </main>
  )
}

export default Content