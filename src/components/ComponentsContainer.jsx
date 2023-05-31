import React from 'react'
import Toggle from './Toggle'
import ControlledInput from './ControlledInput'
import SquareOrCircle from './SquareOrCircle'
import CountIncrement from './CountIncrement'
import CounterReducer from './CounterReducer'
import TextInputWithFocusButton from './TextInputWithFocusButton'
import ControlledInputWithCustomHook from './ControlledInputWithCustomHook'
import Hover from './Hover'
import { useNavigate } from 'react-router-dom'
import Debounce from './Debounce'

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
