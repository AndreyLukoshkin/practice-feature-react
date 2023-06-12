import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from './counterRedux/counterReducer'
import cashReducer from './cashBankRedux/cashReducer'
import reducerCart from './cartRedux/reducerCart'
import customerReducer from './customerRedux/customerReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
  cart: reducerCart,
  customers: customerReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
