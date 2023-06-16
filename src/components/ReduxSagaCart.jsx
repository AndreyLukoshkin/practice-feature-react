import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  deleteProductFromCartSaga,
  idFromProduct,
} from '../redux/productCartRedux/actionCartRedux'

const ReduxSagaCart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.reducerCartRedux)
  console.log(products)

  const handleClick = (idPage) => {
    dispatch(idFromProduct(idPage))
    navigate(`/details/${idPage}`)
  }

  return (
    <div>
      <button onClick={() => navigate('/redux')}>Redux practice</button>
      {products.prodcutToBuy.length > 0 ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {products.prodcutToBuy.map((product, i) => (
            <div
              onClick={() => handleClick(product.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '152px',
                border: '1px solid black',
                cursor: 'pointer',
                margin: '10px',
              }}
              key={i + 1}
            >
              <img
                style={{ width: '150px', height: '150px' }}
                src={products.prodcutToBuy[i].thumbnailUrl}
                alt="item"
              />
              <p>Price: {products.prodcutToBuy[i].id}$</p>
              <p>{products.prodcutToBuy[i].title}</p>
              <button
                style={{
                  padding: '5px',
                  alignItems: 'center',
                  margin: '20px 0 10px 0',
                  width: '80%',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  dispatch(deleteProductFromCartSaga(i))
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>Cart is Empty</div>
      )}
      <div>
        {products.prodcutToBuy.length ? (
          <h2 style={{ display: 'flex', justifyContent: 'center' }}>
            Sum: {products.sum}$
          </h2>
        ) : null}
      </div>
    </div>
  )
}

export default ReduxSagaCart
