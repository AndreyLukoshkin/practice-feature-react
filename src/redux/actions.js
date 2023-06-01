// Определить все необходимые действия (actions) для вашего приложения, например:

export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const restart = () => {
  return {
    type: 'RESTART',
  }
}

export const addCash = (cash) => {
  return {
    type: 'ADD_CASH',
    payload: cash,
  }
}

export const getCash = (cash) => {
  return {
    type: 'GET_CASH',
    payload: cash,
  }
}
