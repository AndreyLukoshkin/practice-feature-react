const initialValue = {
  productsCart: [],
  idPage: '',
  product: [],
}

const reducerCartRedux = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        productsCart: [...state.productsCart, ...action.payload],
      }
    case 'OPEN_PRODUCT_DETAILS':
      return {
        ...state,
        product: action.payload,
      }
    case 'ID_FROM_PRODUCT':
      return {
        ...state,
        idPage: action.payload,
      }
    default:
      return state
  }
}

export default reducerCartRedux
