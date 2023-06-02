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
