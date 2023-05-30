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
    <div>
      <Toggle />
      <ControlledInput />
      <SquareOrCircle />
      <CountIncrement initialCount={0} />
      <CounterReducer />
      <TextInputWithFocusButton />
      <ControlledInputWithCustomHook />
      <Hover />
      <button onClick={() => navigate('/list')}>
        JSON List with custom hooks
      </button>
      <Debounce />
      <button onClick={() => navigate('/posts')}>Posts</button>
    </div>
  )
}

export default ComponentsContainer
