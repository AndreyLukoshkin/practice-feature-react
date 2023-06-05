// Определить все необходимые действия (actions) для вашего приложения, например:

export const incSaga = () => ({ type: 'INCREMENT_SAGA' })

export const asyncIncSaga = () => ({ type: 'ASYNC_INCREMENT_SAGA' })

export const decSaga = () => ({ type: 'DECREMENT_SAGA' })

export const asyncDecSaga = () => ({ type: 'ASYNC_DECREMENT_SAGA' })

export const resSaga = () => ({ type: 'RESTART_SAGA' })
