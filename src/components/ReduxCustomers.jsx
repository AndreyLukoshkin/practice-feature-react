import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCustomer,
  removeCustomer,
} from '../redux/CustomerRedux/actionsCustomer'

const ReduxCustomers = () => {
  const [value, setValue] = useState('')
  const customers = useSelector((state) => state.customer.customers)
  const dispatch = useDispatch()
  console.log(value)

  return (
    <div>
      <h3>ReduxCustomers</h3>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              style={{
                padding: '3px, 5px',
                border: '1px solid teal',
                margin: '5px',
              }}
              onClick={() => dispatch(removeCustomer(customer))}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <h4>No clinets</h4>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="new customer"
      />
      <button onClick={() => dispatch(addCustomer(value, setValue))}>
        Add customer
      </button>
    </div>
  )
}

export default ReduxCustomers
