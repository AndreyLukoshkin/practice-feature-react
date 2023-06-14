// асинхронные экшены для работы со счетчиком
import { put, takeEvery } from 'redux-saga/effects'
import { decrement, increment, restart } from '../counterRedux/actionsCounter'

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export function* incrementWorker() {
  yield delay(1000)
  yield put(increment())
}

export function* decrementWorker() {
  yield delay(1000)
  yield put(decrement())
}

export function* restartWorker() {
  yield delay(1000)
  yield put(restart())
}

export function* countWatcher() {
  yield takeEvery('ASYNC_INCREMENT', incrementWorker)
  yield takeEvery('ASYNC_DECREMENT', decrementWorker)
  yield takeEvery('ASYNC_RESTART', restartWorker)
}
