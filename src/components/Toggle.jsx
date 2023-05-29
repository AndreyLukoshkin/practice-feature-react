import React, { useState } from 'react'

const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState({ isToggleOn: true })

  const handleClick = () => {
    setIsToggleOn(!isToggleOn)
  }

  return (
    <>
      <h3>Toggle the button state</h3>
      <button onClick={handleClick}>
        {isToggleOn ? 'Включено' : 'Выключено'}
      </button>
    </>
  )
}

export default Toggle
