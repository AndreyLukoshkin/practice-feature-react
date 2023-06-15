import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  asyncActionCartRedux,
  idFromProduct,
} from '../redux/productCartRedux/actionCartRedux'
import { useNavigate } from 'react-router-dom'
import Loader from '../UI/Loader'

const ReduxProductListCart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productsList = useSelector(
    (state) => state.reducerCartRedux.productsCart
  )

  useEffect(() => {
    dispatch(asyncActionCartRedux())
  }, [dispatch])

  const handleClick = (idPage) => {
    dispatch(idFromProduct(idPage))
    navigate(`/details/${idPage}`)
  }

  return (
    <div>
      <h2>ReduxProductListCart</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ width: '150px' }}>
          {productsList && productsList.length > 0 ? (
            productsList.map((el) => (
              <div key={el.id}>
                <img
                  onClick={() => handleClick(el.id)}
                  src={el.thumbnailUrl}
                  alt="item"
                />
                <p>Price: {el.id}$</p>
                <p>{el.title}</p>
                <button style={{ display: 'block', margin: '0 auto' }}>
                  add to cart
                </button>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
        <div
          style={{ width: '100px', height: '150px', background: 'yellow' }}
          onClick={() => navigate('/cart')}
        >
          <div>
            <span>Cart</span>
            <span style={{ background: 'red', color: 'white' }}></span>
            <div>$</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReduxProductListCart
