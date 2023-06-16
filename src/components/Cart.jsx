import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteFromCart } from '../redux/cartRedux/actionsCart'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productsObj = useSelector((state) => state.cart)

  return (
    <div>
      <button onClick={() => navigate('/redux')}>Redux practice</button>
      {productsObj.products.length > 0 ? (
        <div>
          {productsObj.products.map((product, i) => (
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
              onClick={() => dispatch(deleteFromCart(i))}
              key={i + 1}
            >
              <p>{product}</p>
              <p>{productsObj.price[i]}$</p>
            </div>
          ))}
          <div>Sum: {productsObj.sum}$</div>
        </div>
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  )
}

export default Cart
