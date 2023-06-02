import React from 'react'
import {
  increment,
  decrement,
  restart,
} from '../redux/CounterRedux/actionsCounter'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const ReduxCounter = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch() // Получение функции dispatch для отправки действий в reducer(а он уже изменит состояние)
  const count = useSelector((state) => state.counter.count) // Получение значения счетчика из хранилища

  return (
    <div>
      <h3>Simple Counter with Redux, Redux practice</h3>
      <button onClick={() => navigate('redux')}>Main</button>
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(restart())}>Restart</button>
      </div>
    </div>
  )
}

export default ReduxCounter
