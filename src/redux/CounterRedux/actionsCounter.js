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

export const asyncIncrement = () => {
  return {
    type: 'ASYNC_INCREMENT',
  }
}

export const asyncDecrement = () => {
  return {
    type: 'ASYNC_DECREMENT',
  }
}

export const asyncRestart = () => {
  return {
    type: 'ASYNC_RESTART',
  }
}
