// сага для экшенов пользователя

import { call, put, takeEvery } from 'redux-saga/effects'
import { addManyCustomers } from '../customerRedux/customerActions'
import axios from 'axios'

const fetchUsersFromApi = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users?_limit=10'
  )
  return response.data
}

const handleError = (error) => {
  console.error('ERROR! MESSAGE:', error)
}

export function* fetchUsersWorker() {
  try {
    const data = yield call(fetchUsersFromApi)
    yield put(addManyCustomers(data))
  } catch (error) {
    yield call(handleError, error)
  }
}

export function* userWatcher() {
  yield takeEvery('ASYNC_ADD_MANY_CUSTOMERS', fetchUsersWorker)
}
