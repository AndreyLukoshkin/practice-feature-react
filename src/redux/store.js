import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from './CounterRedux/counterReducer'
import cashReducer from './CashBankRedux/cashReducer'
import reducerCart from './cartRedux/reducerCart'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
  cart: reducerCart,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
