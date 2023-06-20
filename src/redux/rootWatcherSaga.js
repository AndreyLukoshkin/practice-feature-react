import { all, spawn, call } from 'redux-saga/effects'
import { userWatcher } from '../redux/reduxSaga/userSaga'
import { countWatcher } from '../redux/reduxSaga/countSaga'
import { cartWatcher } from './productCartRedux/sagaProductCart'
import { fetchDataSagaWatcher } from './fetchDataSaga/fetchSaga'

export function* rootWatcherSaga() {
  const sagas = [userWatcher, countWatcher, cartWatcher, fetchDataSagaWatcher]

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (error) {
          console.log(error)
        }
      }
    })
  })
  yield all(retrySagas)
}
