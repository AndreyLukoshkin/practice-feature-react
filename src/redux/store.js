// Создать хранилище (store), объединив редьюсеры combineReducers (при необходимости), например:
import { createStore, combineReducers } from 'redux'
import counterReducer from './CounterRedux/counterReducer'
import cashReducer from './CashBankRedux/cashReducer'
import customerReducer from './CustomerRedux/customerReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
  customer: customerReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
