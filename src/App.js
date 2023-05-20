// import logo from './logo.svg'
import './App.css'
import React, { useState, useReducer, useRef } from 'react'

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

const SquareOrCircle = () => {
  const [circle, setCircle] = useState(true)

  let styleForSquare = {
    width: '200px',
    height: '200px',
    background: 'green',
    borderRadius: '0',
  }
  let styleForCircle = {
    width: '200px',
    height: '200px',
    background: 'blue',
    borderRadius: '50%',
  }

  const handleClick = () => {
    setCircle(!circle)
  }

  return (
    <>
      <h3>Change the shape</h3>
      <div id="square" style={circle ? styleForSquare : styleForCircle}></div>
      <button onClick={handleClick}>Change</button>
    </>
  )
}

const CountIncrement = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const clickDown = () => {
    setCount((prevCount) => prevCount - 1)
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

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h3>Counter with useReducer</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </div>
  )
}

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

function App() {
  return (
    <>
      <Toggle />
      <ControlledInput />
      <SquareOrCircle />
      <CountIncrement initialCount={0} />
      <Counter />
      <TextInputWithFocusButton />
    </>
  )
}

export default App
