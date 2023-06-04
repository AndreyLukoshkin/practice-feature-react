// Создать хранилище (store), объединив редьюсеры combineReducers (при необходимости), например:
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './CounterRedux/counterReducer'
import cashReducer from './CashBankRedux/cashReducer'
import customerReducer from './CustomerRedux/customerReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
  customer: customerReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
