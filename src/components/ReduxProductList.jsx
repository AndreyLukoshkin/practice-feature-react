import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/ProductListRedux/actionsProductList'

const ReduxProductList = () => {
  const [value, setValue] = useState('')
  const customers = useSelector((state) => state.customer.customers)
  const dispatch = useDispatch()

  return (
    <div style={{ margin: '10px 0' }}>
      <h2>ProductList</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="new item to cart"
      />
      <button onClick={dispatch(addToCart(value, setValue))}>
        Add to cart
      </button>
      <button onClick={dispatch()}>Remove from cart</button>
      <button onClick={dispatch()}>Clear cart</button>
    </div>
  )
}

export default ReduxProductList
