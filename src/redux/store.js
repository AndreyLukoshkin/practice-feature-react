import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from './counterRedux/counterReducer'
import cashReducer from './cashBankRedux/cashReducer'
import reducerCart from './cartRedux/reducerCart'
import customerReducer from './customerRedux/customerReducer'
import sagaCustomerReducer from './reduxSaga/sagaCustomersReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootWatcherSaga } from './rootWatcherSaga'
import reducerCartRedux from './productCartRedux/reducerCartRedux'
import fetchReducer from './fetchDataSaga/reducerFetch'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  counter: counterReducer,
  calculateCash: cashReducer,
  customers: customerReducer,
  cart: reducerCart,
  sagaCustomerReducer,
  reducerCartRedux,
  fetchReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(rootWatcherSaga)

export default store
