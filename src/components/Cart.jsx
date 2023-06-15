import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteFromCart } from '../redux/cartRedux/actionsCart'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products)
  const sum = useSelector((state) => state.cart.sum)
  const price = useSelector((state) => state.cart.price)

  return (
    <div>
      <button onClick={() => navigate('/redux')}>Redux practice</button>
      {products.length > 0 ? (
        <div>
          {products.map((product, i) => (
            <div
              style={{
                padding: '0px 5px',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
                cursor: 'pointer',
                margin: '2px 0px',
                maxWidth: '100px',
              }}
              onClick={() => dispatch(deleteFromCart(product))}
              key={i + 1}
            >
              {product}
            </div>
          ))}
          <div>Sum: {sum}$</div>
        </div>
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  )
}

export default Cart
