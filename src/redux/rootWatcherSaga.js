// здесь проинициализируем сагу
import { all } from 'redux-saga/effects'
import { userWatcher } from '../redux/reduxSaga/userSaga'
import { countWatcher } from '../redux/reduxSaga/countSaga'
import { cartWatcher } from './productCartRedux/sagaProductCart'
import { fetchDataSagaWatcher } from './fetchDataSaga/fetchSaga'

export function* rootWatcherSaga() {
  yield all([
    userWatcher(),
    countWatcher(),
    cartWatcher(),
    fetchDataSagaWatcher(),
  ])
}
