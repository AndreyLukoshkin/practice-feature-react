import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchData } from '../redux/fetchDataSaga/actionFetch'
import Loader from '../UI/Loader'

const FetchDataSaga = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.fetchDataReducer)

  return (
    <div>
      <h2>Fetch Data Saga</h2>
      <button onClick={() => dispatch(actionFetchData())}>Fetch data</button>
      <div>
        {data.error ? (
          <div>Error: {data.error}</div>
        ) : (
          <div>
            {!data.loading ? (
              data.data.map((el) => <div key={el.id}>{el.name}</div>)
            ) : (
              <Loader />
            )}
          </div>
        )}
      </div>
      <div style={{ margin: '20px 0 0 0' }}>
        {data.error ? (
          <div>Error: {data.error}</div>
        ) : (
          <div>
            {!data.loading ? (
              data.todos.map((el) => <div key={el.id}>{el.title}</div>)
            ) : (
              <Loader />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default FetchDataSaga
