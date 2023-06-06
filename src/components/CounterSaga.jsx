import React from 'react'
import {
  resSaga,
  asyncIncSaga,
  asyncDecSaga,
} from '../redux-saga/actionCounterSaga'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../redux-saga/getUsersReducerAction'

const CounterSaga = () => {
  const dispatch = useDispatch() // Получение функции dispatch для отправки действий в reducer(а он уже изменит состояние)
  const count = useSelector((state) => state.counterSaga.count) // Получение значения счетчика из хранилища
  const users = useSelector((state) => state.userReducer.users)

  return (
    <div>
      <h2>Counter-Saga with delay: {count}</h2>
      <button onClick={() => dispatch(asyncIncSaga())}>Increment</button>
      <button onClick={() => dispatch(asyncDecSaga())}>Decrement</button>
      <button onClick={() => dispatch(resSaga())}>Restart</button>
      <button onClick={() => dispatch(fetchUsers())}>Get users</button>
      <div>
        {users.map((user, i) => (
          <div key={i + 1}>{user.name}</div>
        ))}
      </div>
    </div>
  )
}

export default CounterSaga
