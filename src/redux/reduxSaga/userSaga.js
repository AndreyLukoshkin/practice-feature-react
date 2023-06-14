// сага для экшенов пользователя

import { call, put, takeEvery } from 'redux-saga/effects'
import { addManyCustomers } from '../customerRedux/customerActions'

const fetchUsersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

export function* fetchUsersWorker() {
  const data = yield call(fetchUsersFromApi)
  const json = yield call(() => new Promise((resolve) => resolve(data.json())))
  yield put(addManyCustomers(json))
}

export function* userWatcher() {
  yield takeEvery('ASYNC_ADD_MANY_CUSTOMERS', fetchUsersWorker)
}
