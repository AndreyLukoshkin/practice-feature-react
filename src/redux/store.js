// Создать хранилище (store), объединив редьюсеры combineReducers (при необходимости), например:
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './CounterRedux/counterReducer'
import cashReducer from './CashBankRedux/cashReducer'
import customerReducer from './CustomerRedux/customerReducer'
import counterReducerSaga from '../redux-saga/counterReducerSaga'
import reducerProdList from './ProductListRedux/reducerProdList'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import userReducer from '../redux-saga/getUsersReducerAction'
import { rootWatcher } from '../redux-saga'
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
  customer: customerReducer,
  counterSaga: counterReducerSaga,
  userReducer: userReducer,
  reducerProdList: reducerProdList,
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

export default store
