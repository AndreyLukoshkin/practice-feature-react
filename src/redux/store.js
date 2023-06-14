import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from './counterRedux/counterReducer'
import cashReducer from './cashBankRedux/cashReducer'
import reducerCart from './cartRedux/reducerCart'
import customerReducer from './customerRedux/customerReducer'
import reducerCounter from './reduxSaga/reducerCounter'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootWatcherSaga } from './reduxSaga/rootWatcherSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
  cart: reducerCart,
  customers: customerReducer,
  reducerCounter: reducerCounter,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(rootWatcherSaga)

export default store
