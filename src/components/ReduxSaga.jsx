import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  asyncIncrement,
  asyncDecrement,
  asyncRestart,
} from '../redux/counterRedux/actionsCounter'
import { asyncAddManyCustomers } from '../redux/customerRedux/customerActions'

const ReduxSaga = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.count)
  const customers = useSelector((state) => state.customers.customers)

  return (
    <div style={{ margin: '20px 0' }}>
      <div>
        <h2>Redux-saga counter with delay, api customers</h2>
        <h3>Counter: {count}</h3>
        <button onClick={() => dispatch(asyncIncrement())}>Increment</button>
        <button onClick={() => dispatch(asyncDecrement())}>Decrement</button>
        <button onClick={() => dispatch(asyncRestart())}>Restart</button>
      </div>
      <button onClick={() => dispatch(asyncAddManyCustomers())}>
        Add many customers
      </button>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              style={{
                border: '1px solid black',
                padding: '3px 5px',
                margin: '2px 0',
              }}
              key={customer.id}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>No customers!</div>
      )}
    </div>
  )
}

export default ReduxSaga
