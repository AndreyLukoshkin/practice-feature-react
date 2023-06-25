import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductToCartModel,
  asyncActionCartRedux,
  idFromProduct,
} from '../redux/productCartRedux/actionCartRedux'
import { useNavigate } from 'react-router-dom'
import Loader from '../UI/Loader'
import ReduxSagaCartModel from './ReduxSagaCartModel'

const ReduxProductListCart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.reducerCartRedux)

  useEffect(() => {
    dispatch(asyncActionCartRedux())
  }, [dispatch])

  const handleClick = (id) => {
    dispatch(idFromProduct(id))
    navigate(`/details/${id}`)
  }

  return (
    <div>
      <h2>ReduxProductListCart</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '150px' }}>
          {productsList.productsCart && productsList.productsCart.length > 0 ? (
            productsList.productsCart.map((product) => (
              <div onClick={() => handleClick(product.id)} key={product.id}>
                <img
                  style={{ cursor: 'pointer' }}
                  src={product.thumbnailUrl}
                  alt="item"
                />
                <p style={{ cursor: 'pointer' }}>Price: {product.id}$</p>
                <p style={{ cursor: 'pointer' }}>{product.title}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    dispatch(addProductToCartModel(product))
                  }}
                  style={{
                    display: 'block',
                    margin: '0 auto',
                    cursor: 'pointer',
                  }}
                >
                  add to cart
                </button>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
        <ReduxSagaCartModel />
      </div>
    </div>
  )
}

export default ReduxProductListCart
