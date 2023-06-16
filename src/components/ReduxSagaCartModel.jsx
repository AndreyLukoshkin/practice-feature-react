import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ReduxSagaCartModel = () => {
  const productsList = useSelector((state) => state.reducerCartRedux)
  const navigate = useNavigate()
  return (
    <div
      style={{ width: '100px', height: '150px', background: 'blue' }}
      onClick={() => navigate('/cartsaga')}
    >
      {productsList.prodcutToBuy.length > 0 ? (
        <div>
          <span style={{ color: 'white' }}>Cart</span>
          <span style={{ background: 'red', color: 'white' }}>
            {productsList.prodcutToBuy.length}
          </span>
          <div style={{ color: 'white' }}>{productsList.sum}$</div>
        </div>
      ) : (
        <span style={{ color: 'white' }}>Cart is Empty</span>
      )}
    </div>
  )
}

export default ReduxSagaCartModel
