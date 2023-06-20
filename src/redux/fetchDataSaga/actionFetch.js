export const actionFetchData = () => {
  return {
    type: 'FETCH_DATA',
  }
}
export const actionFetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST',
  }
}
export const actionFetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
  }
}
export const actionTodosDataSuccess = (data) => {
  return {
    type: 'LOAD_TODOS',
    payload: data,
  }
}
export const actionFetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  }
}
