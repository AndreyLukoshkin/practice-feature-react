import React, { useState } from 'react'

const CountIncrement = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  const handleClick = () => {
    setCount((count) => count + 1)
  }

  const clickDown = () => {
    setCount(count - 1)
  }

  const refreshClicks = () => {
    setCount(initialCount)
  }

  return (
    <div>
      <h3>Count clicks with useState</h3>
      <p>You click {count} times</p>
      <button onClick={handleClick}>Press to click +1</button>
      <button onClick={clickDown}>Press to click -1</button>
      <button onClick={refreshClicks}>Press to refresh clicks</button>
    </div>
  )
}

export default CountIncrement
