import { call, put, takeEvery } from 'redux-saga/effects'
import { addSagaCustomers } from '../customerRedux/customerActions'
import axios from 'axios'

const fetchUsersFromApi = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users?_limit=10'
  )
  return response.data
}

export function* fetchUsersWorker() {
  try {
    const data = yield call(fetchUsersFromApi)
    yield put(addSagaCustomers(data))
  } catch (error) {
    console.error('ERROR! MESSAGE:', error)
  }
}

export function* userWatcher() {
  yield takeEvery('ASYNC_ADD_MANY_CUSTOMERS', fetchUsersWorker)
}
