export const addCash = (cash, setValue) => {
  setValue('')
  return {
    type: 'ADD_CASH',
    payload: cash,
  }
}

export const getCash = (cash, setValue) => {
  setValue('')
  return {
    type: 'GET_CASH',
    payload: cash,
  }
}
