import React, { useRef } from 'react'

function TextInputWithFocusButton() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // current указывает на смонтированный элемент input
    inputEl.current.focus()
  }
  return (
    <>
      <h3>useRef focus on input</h3>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Установить фокус на поле ввода</button>
      <br />
      <br />
    </>
  )
}

export default TextInputWithFocusButton
