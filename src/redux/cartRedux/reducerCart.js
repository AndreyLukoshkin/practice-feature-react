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
        products: [...state.products, action.payloadName],
        price: [...state.price, action.payloadPrice],
        sum: [...state.price, action.payloadPrice].reduce((a, b) => a + b, 0),
        id: [...state.id, action.payloadId],
      }
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((product, i) => {
          return product[i] !== action.payload[action.payloadI]
        }),
        price: state.price.filter((_, i) => {
          return i !== action.payloadI
        }),
        sum: [action.payloadSum - action.payloadPrice[action.payloadI]],
      }
    default:
      return state
  }
}

export default reducerCart
