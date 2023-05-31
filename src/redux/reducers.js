// Определить редьюсер (reducer), который будет обрабатывать действия и обновлять состояние приложения, например:

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'RESTART':
      return 0
    default:
      return state
  }
}

export default counterReducer
