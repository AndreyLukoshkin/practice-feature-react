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
  )
}

export default FetchDataSaga
