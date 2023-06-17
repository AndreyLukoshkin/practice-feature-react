// sagas.js
import { put, takeEvery, call } from 'redux-saga/effects'
import axios from 'axios'

function* fetchDataSaga() {
  try {
    yield put(fetchDataRequest()) // Диспатч экшена FETCH_DATA_REQUEST перед началом запроса

    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users'
    ) // Выполнение асинхронного запроса данных
    const data = response.data

    yield put(fetchDataSuccess(data)) // Диспатч экшена FETCH_DATA_SUCCESS с полученными данными
  } catch (error) {
    yield put(fetchDataFailure(error.message)) // Диспатч экшена FETCH_DATA_FAILURE в случае ошибки
  }
}

export function* rootSaga() {
  yield takeEvery('FETCH_DATA', fetchDataSaga) // Отслеживание экшена FETCH_DATA и вызов саги fetchDataSaga
}
