const initialState = {
  data: [],
  error: '',
  loading: false,
  todos: [],
}

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null }
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload }
    case 'LOAD_TODOS':
      return { ...state, loading: false, todos: action.payload }
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload }
    default:
      return { ...state }
  }
}

export default fetchDataReducer
