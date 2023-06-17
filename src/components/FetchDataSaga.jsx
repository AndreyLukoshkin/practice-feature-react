import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/fetchDataSaga/actionFetch'

const FetchDataSaga = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.fetchData)

  return (
    <div>
      <h2>Fetch Data Saga</h2>
      <button onClick={() => dispatch(fetchData())}>Fetch data</button>
      <div>{data}</div>
    </div>
  )
}

export default FetchDataSaga
