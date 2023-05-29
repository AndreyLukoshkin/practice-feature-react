import React, { useState } from 'react'
import styles from '../stylemodules/SquareOrCircle.module.css'

const SquareOrCircle = () => {
  const [isCircle, setIsCircle] = useState(false)

  const handleClick = () => {
    setIsCircle((isCircle) => !isCircle)
  }

  return (
    <>
      <h3>Change the shape</h3>
      <div
        id="square"
        className={isCircle ? styles.circle : styles.square}
      ></div>
      <button onClick={handleClick}>Change</button>
    </>
  )
}

export default SquareOrCircle
