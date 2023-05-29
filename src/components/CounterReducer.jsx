import React, { useReducer } from 'react'

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

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // state = initialState
  // reducer = это функция(state, action) - возвращает результат в state и изменяет его
  // action = аргумент функции dispatch (в данном случае объект со свойством type поэтому action.type)
  // dispatch = встроенная функция из useReducer() - передает action в reducer

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

export default Counter
