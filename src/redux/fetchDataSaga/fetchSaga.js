import { call, put, takeEvery, fork } from 'redux-saga/effects'
import {
  actionFetchDataFailure,
  actionFetchDataRequest,
  actionFetchDataSuccess,
  actionTodosDataSuccess,
} from './actionFetch'
import axios from 'axios'

export const getData = async (users) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/${users}`
  )
  const data = await response.data
  return data
}

export function* loadUsers() {
  const data = yield call(getData, 'users')
  yield put(actionFetchDataSuccess(data))
}

export function* loadTodos() {
  const todoData = yield call(getData, 'todos?_limit=10')
  yield put(actionTodosDataSuccess(todoData))
}

export function* fetchDataSagaWorker() {
  try {
    yield put(actionFetchDataRequest())
    yield fork(loadUsers)
    yield fork(loadTodos)
  } catch (error) {
    yield put(actionFetchDataFailure(error.message))
  }
}

export function* fetchDataSagaWatcher() {
  yield takeEvery('FETCH_DATA', fetchDataSagaWorker)
}
