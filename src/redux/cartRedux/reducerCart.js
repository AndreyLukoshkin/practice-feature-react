const initialState = {
  products: [],
  price: [],
  sum: [],
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
        products: state.id.filter((id, i) => {
          return id !== action.payload[action.payload.id]
        }),
        price: state.price.filter((_, i) => {
          return i !== action.payload.id
        }),
        sum: [action.payload.sum - action.payload.id[action.payload.id]],
      }
    default:
      return state
  }
}

export default reducerCart
