import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, restart } from '../redux/actions'
import { addCash, getCash } from '../redux/actions'

const ReduxPractice = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch() // Получение функции dispatch для отправки действий в reducer(а он уже изменит состояние)
  const count = useSelector((state) => state.counterReducer.count) // Получение значения счетчика из хранилища
  const cash = useSelector((state) => state.reducer.cash)

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
      <div style={{ margin: '20px 0', width: '30%' }}>
        <h3>Balance {cash}</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => dispatch(addCash(Number(value)))}>
            Add cash
          </button>
          <button onClick={() => dispatch(getCash(Number(value)))}>
            Get cash
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReduxPractice
