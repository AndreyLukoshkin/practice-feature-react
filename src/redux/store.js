// Создать хранилище (store), объединив редьюсеры combineReducers (при необходимости), например:
import { createStore, combineReducers } from 'redux'
import counterReducer from './CounterRedux/counterReducer'
import cashReducer from './CashBankRedux/cashReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
})

const store = createStore(rootReducer)

export default store
