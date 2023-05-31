// Создать хранилище (store), объединив редьюсеры и применив middleware (при необходимости), например:

import { createStore } from 'redux'
import counterReducer from './reducers'

const store = createStore(counterReducer)

export default store
