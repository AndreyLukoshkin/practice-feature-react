import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, restart } from '../redux/actions'

const ReduxPractice = () => {
  const navigate = useNavigate()
  const count = useSelector((state) => state) // Получение значения счетчика из хранилища
  const dispatch = useDispatch() // Получение функции dispatch для отправки действий в reducer(а он уже изменит состояние)

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

export default ReduxPractice
