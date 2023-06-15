import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchProductDetails } from '../redux/productCartRedux/apiProduct'
import Loader from '../UI/Loader'

const ReduxProductDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const product = useSelector((state) => state.reducerCartRedux.product)

  useEffect(() => {
    dispatch(fetchProductDetails(id))
  }, [dispatch, id])

  return (
    <div>
      <button onClick={() => navigate('/redux')}>redux practice</button>
      <div>
        {id < 5001 ? (
          <div>
            {product && product.length > 0 ? (
              <div style={{ width: '150px' }}>
                <img src={product[0].thumbnailUrl} alt="item" />
                <div>{product[0].id}</div>
                <div>{product[0].title}</div>
                <button style={{ display: 'block', margin: '0 auto' }}>
                  add to cart
                </button>
              </div>
            ) : (
              <Loader />
            )}
            <p style={{ marginTop: '30px' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, unde itaque dolorem debitis recusandae incidunt
              impedit facere nihil necessitatibus mollitia cupiditate ipsum quam
              aliquid sapiente molestiae. Repellat quaerat similique laboriosam!
            </p>
          </div>
        ) : (
          <div> NO such products</div>
        )}
      </div>
    </div>
  )
}

export default ReduxProductDetails
