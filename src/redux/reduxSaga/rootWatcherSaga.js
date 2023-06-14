// здесь проинициализируем сагу
import { all } from 'redux-saga/effects'
import { userWatcher } from './userSaga'
import { countWatcher } from './countSaga'

export function* rootWatcherSaga() {
  yield all([userWatcher(), countWatcher()], [])
}
