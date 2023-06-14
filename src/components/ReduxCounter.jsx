import React from 'react'
import {
  increment,
  decrement,
  restart,
} from '../redux/counterRedux/actionsCounter'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const ReduxCounter = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch() // Получение функции dispatch для отправки действий в reducer(а он уже изменит состояние)
  const count = useSelector((state) => state.counter.count) // Получение значения счетчика из хранилища

  return (
    <div>
      <button onClick={() => navigate('redux')}>Main</button>
      <div style={{ margin: '20px 0' }}>
        <h1>Redux practice, thunk, saga</h1>
        <div style={{ margin: '20px 0' }}>
          <h2>Counter: {count}</h2>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(restart())}>Restart</button>
        </div>
      </div>
    </div>
  )
}

export default ReduxCounter
