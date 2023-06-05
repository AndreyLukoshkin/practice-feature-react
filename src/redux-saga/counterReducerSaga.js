// Определить редьюсер (reducer), который будет обрабатывать действия и обновлять состояние приложения, например:

const initialCount = {
  count: 0,
}

export const counterReducerSaga = (state = initialCount, action) => {
  switch (action.type) {
    case 'INCREMENT_SAGA':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT_SAGA':
      return { ...state, count: state.count - 1 }
    case 'RESTART_SAGA':
      return { ...state, count: 0 }
    default:
      return state
  }
}

export default counterReducerSaga
