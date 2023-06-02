import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCash, getCash } from '../redux/CashBankRedux/actionsCash'

const ReduxBankBalance = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const cash = useSelector((state) => state.calculateCash.cash)

  return (
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
  )
}

export default ReduxBankBalance
