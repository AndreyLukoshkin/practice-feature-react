// Определить редьюсер (reducer), который будет обрабатывать действия и обновлять состояние приложения, например:

const initialCount = {
  count: 0,
}

export const counterReducer = (state = initialCount, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'RESTART':
      return { ...state, count: 0 }
    default:
      return state
  }
}

const defaultState = {
  cash: 0,
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload }
    case 'GET_CASH':
      return { ...state, cash: state.cash - action.payload }
    default:
      return state
  }
}

export default { counterReducer, reducer }
