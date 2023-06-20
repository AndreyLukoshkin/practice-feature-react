import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProductDetails } from '../redux/productCartRedux/apiProduct'
import Loader from '../UI/Loader'
import ReduxSagaCartModel from './ReduxSagaCartModel'
import { addProductToCartModel } from '../redux/productCartRedux/actionCartRedux'

const ReduxProductDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const product = useSelector((state) => state.reducerCartRedux)

  useEffect(() => {
    dispatch(fetchProductDetails(id))
  }, [dispatch, id])

  return (
    <div style={{ padding: '50px 50px' }}>
      <button onClick={() => navigate('/redux')}>redux practice</button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {id < 5001 ? (
            <div>
              {product.product && product.product.length > 0 ? (
                <div style={{ width: '150px' }}>
                  <img src={product.product[0].thumbnailUrl} alt="item" />
                  <div>Price: {product.product[0].id}$</div>
                  <div>{product.product[0].title}</div>
                  <button
                    onClick={() =>
                      dispatch(addProductToCartModel(product.product[0]))
                    }
                    style={{ display: 'block', margin: '0 auto' }}
                  >
                    add to cart
                  </button>
                </div>
              ) : (
                <Loader />
              )}
            </div>
          ) : (
            <div> NO such products</div>
          )}
        </div>
        <div>
          <ReduxSagaCartModel />
        </div>
      </div>
      <p style={{ marginTop: '30px' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque,
        unde itaque dolorem debitis recusandae incidunt impedit facere nihil
        necessitatibus mollitia cupiditate ipsum quam aliquid sapiente
        molestiae. Repellat quaerat similique laboriosam!
      </p>
    </div>
  )
}

export default ReduxProductDetails
