import React from 'react'
import { useNavigate } from 'react-router-dom'
import ControlledInput from './ControlledInput'
import ControlledInputWithCustomHook from './ControlledInputWithCustomHook'
import CountIncrement from './CountIncrement'
import CounterReducer from './CounterReducer'
import Debounce from './Debounce'
import Hover from './Hover'
import SquareOrCircle from './SquareOrCircle'
import TextInputWithFocusButton from './TextInputWithFocusButton'
import Toggle from './Toggle'

const ComponentsContainer = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <Toggle />
      <ControlledInput />
      <SquareOrCircle />
      <CountIncrement initialCount={0} />
      <CounterReducer />
      <TextInputWithFocusButton />
      <ControlledInputWithCustomHook />
      <Hover />
      <button onClick={() => navigate('/list')}>ListEndlessScroll</button>
      <Debounce />
      <button onClick={() => navigate('/posts')}>Posts axios</button>
      <button style={{ margin: '20px 0' }} onClick={() => navigate('/redux')}>
        Redux practice
      </button>
    </div>
  )
}

export default ComponentsContainer
