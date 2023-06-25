import { all, call, spawn } from 'redux-saga/effects'
import { countWatcher } from '../redux/reduxSaga/countSaga'
import { userWatcher } from '../redux/reduxSaga/userSaga'
import { fetchDataSagaWatcher } from './fetchDataSaga/fetchSaga'
import { cartWatcher } from './productCartRedux/sagaProductCart'

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
