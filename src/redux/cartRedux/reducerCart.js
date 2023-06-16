const initialState = {
  products: [],
  price: [],
  sum: 0,
  id: [],
}

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: [...state.products, action.payload.title],
        price: [...state.price, action.payload.id],
        sum: [...state.price, action.payload.id].reduce((a, b) => a + b, 0),
        id: [...state.id, action.payload.id],
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((_, i) => {
          return i !== action.payload
        }),
        price: state.price.filter((_, i) => {
          return i !== action.payload
        }),
        id: state.id.filter((_, i) => {
          return i !== action.payload
        }),
        sum: state.sum - state.id[action.payload],
      }
    default:
      return state
  }
}

export default reducerCart
