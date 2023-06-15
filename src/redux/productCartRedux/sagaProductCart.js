import { call, put, takeEvery } from 'redux-saga/effects'
import { actionCartRedux } from './actionCartRedux'
import axios from 'axios'

export const fetchProductsFromApi = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/photos?_limit=10'
  )
  return response.data
}

export function* cartWorker() {
  try {
    const data = yield call(fetchProductsFromApi)
    yield put(actionCartRedux(data))
  } catch (error) {
    console.error('ERROR! MESSAGE:', error)
  }
}

export function* cartWatcher() {
  yield takeEvery('ASYNC_ADD_PRODUCTS', cartWorker)
}
