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

export default counterReducer
