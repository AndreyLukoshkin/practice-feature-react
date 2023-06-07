// Создать хранилище (store), объединив редьюсеры combineReducers (при необходимости), например:
import { createStore, combineReducers } from 'redux'
import counterReducer from './CounterRedux/counterReducer'
import cashReducer from './CashBankRedux/cashReducer'
import reducerCart from '../redux/CartRedux/reducerCart'

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
  reducerCart: reducerCart,
})

const store = createStore(rootReducer)

export default store
