import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCash, getCash } from '../redux/cashBankRedux/actionsCash'
import {
  addCustomer,
  removeAllCustomers,
  removeCustomer,
} from '../redux/customerReducer/customerActions'

const ReduxBankBalance = () => {
  const [value, setValue] = useState('')
  const [valueCustomer, setValueCustomer] = useState('')
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.calculateCash.cash)
  const customers = useSelector((state) => state.customers.customers)

  return (
    <div style={{ margin: '20px 0', width: '30%' }}>
      <h3>Balance {cash}</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="write number"
        />
        <button onClick={() => dispatch(addCash(Number(value), setValue))}>
          Add cash
        </button>
        <button onClick={() => dispatch(getCash(Number(value), setValue))}>
          Get cash
        </button>
        <input
          type="text"
          value={valueCustomer}
          onChange={(e) => setValueCustomer(e.target.value)}
          placeholder="write customer name"
        />
        <button
          onClick={() => {
            if (valueCustomer)
              dispatch(addCustomer(valueCustomer, setValueCustomer))
          }}
        >
          Add customer
        </button>
        <button onClick={() => dispatch(removeAllCustomers())}>
          Remove all customer
        </button>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div
                key={customer.id}
                onClick={() => dispatch(removeCustomer(customer.id))}
              >
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div>No customers!</div>
        )}
      </div>
    </div>
  )
}

export default ReduxBankBalance
