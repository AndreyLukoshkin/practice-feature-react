import { call, put, takeEvery } from 'redux-saga/effects'
import {
  actionFetchDataFailure,
  actionFetchDataRequest,
  actionFetchDataSuccess,
} from './actionFetch'
import axios from 'axios'

export function* fetchDataSagaWorker() {
  try {
    yield put(actionFetchDataRequest())
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users'
    )
    const data = response.data

    yield put(actionFetchDataSuccess(data))
  } catch (error) {
    yield put(actionFetchDataFailure(error.message))
  }
}

export function* fetchDataSagaWatcher() {
  yield takeEvery('FETCH_DATA', fetchDataSagaWorker)
}
