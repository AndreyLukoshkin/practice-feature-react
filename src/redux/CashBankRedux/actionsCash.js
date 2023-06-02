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
