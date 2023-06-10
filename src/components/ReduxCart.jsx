import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import products from '../products/products'
import { addToCart } from '../redux/cartRedux/actionsCart'
import { useNavigate } from 'react-router-dom'

const ReduxCart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const prodsLength = useSelector((state) => state.cart.products)
  const sum = useSelector((state) => state.cart.sum)

  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          {products.map((product) => (
            <div
              style={{
                padding: '0px 5px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid black',
                cursor: 'pointer',
                margin: '2px',
              }}
              onClick={() =>
                dispatch(addToCart(product.name, product.price, product.id))
              }
              key={product.id}
            >
              {product.name}
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <div
          style={{ width: '100px', height: '150px', background: 'yellow' }}
          onClick={() => navigate('/cart')}
        >
          {prodsLength.length > 0 ? (
            <div>
              <span>Cart</span>
              <span style={{ background: 'red', color: 'white' }}>
                {prodsLength.length}
              </span>
              <div>{sum}$</div>
            </div>
          ) : (
            <span>Cart is Empty</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReduxCart
