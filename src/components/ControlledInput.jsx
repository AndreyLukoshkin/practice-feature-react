import React, { useState } from 'react'

const ControlledInput = () => {
  const [pvalue, setPvalue] = useState('')
  const [inp, setInp] = useState('')

  const handleClick = () => {
    setPvalue(inp)
    setInp('')
  }

  return (
    <div>
      <h3>Controlled Input</h3>
      <input
        type="text"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      ></input>
      <button onClick={handleClick}>Press to change Info from input</button>
      <p>Info: {pvalue}</p>
    </div>
  )
}

export default ControlledInput
