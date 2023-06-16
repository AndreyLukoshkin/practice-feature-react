import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CartModel = () => {
  const prodsLength = useSelector((state) => state.cart.products)
  const sum = useSelector((state) => state.cart.sum)
  const navigate = useNavigate()
  return (
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
  )
}

export default CartModel
