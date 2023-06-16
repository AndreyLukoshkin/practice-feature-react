import React from 'react'
import { useDispatch } from 'react-redux'
import products from '../products/products'
import { addToCart } from '../redux/cartRedux/actionsCart'
import CartModel from './CartModel'

const ReduxCart = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Redux Cart products list with cart</h2>
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
              onClick={() => dispatch(addToCart(product))}
              key={product.id}
            >
              {product.title}
              <p>{product.id} $</p>
            </div>
          ))}
        </div>
        <CartModel />
      </div>
    </div>
  )
}

export default ReduxCart
