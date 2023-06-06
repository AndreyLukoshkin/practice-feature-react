const defaultState = {
  cart: [],
}

const reducerProdList = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [state.cart, action.payload] }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((cart) => cart.id !== action.payload),
      }
    case 'CLEAR_CART':
      return { customers: [] }
    default:
      return state
  }
}

export default reducerProdList
