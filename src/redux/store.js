// Создать хранилище (store), объединив редьюсеры combineReducers (при необходимости), например:

import { createStore, combineReducers } from 'redux'
import reducers from './reducers'

const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer)

export default store
