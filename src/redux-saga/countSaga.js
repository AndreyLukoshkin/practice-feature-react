import { put, takeEvery } from 'redux-saga/effects'
import { decSaga, incSaga } from './actionCounterSaga'

const delay = (ms) => new Promise((res) => setTimeout(res, ms))

function* incrementWorker() {
  yield delay(1000)
  yield put(incSaga())
}

function* decrementWorker() {
  yield delay(1000)
  yield put(decSaga())
}

export function* countWatcher() {
  yield takeEvery('ASYNC_INCREMENT_SAGA', incrementWorker)
  yield takeEvery('ASYNC_DECREMENT_SAGA', decrementWorker)
}
