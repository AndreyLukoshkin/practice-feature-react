const initialValue = {
  productsCart: [],
  idPage: '',
  product: [],
  prodcutToBuy: [],
  sum: 0,
  isLoading: false,
  error: '',
}

const reducerCartRedux = (state = initialValue, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      if (state.productsCart.length > 0) {
        return {
          ...state,
        }
      } else {
        return {
          ...state,
          productsCart: [...state.productsCart, ...action.payload],
        }
      }
    case 'PRODUCT_DETAILS_REQUEST':
      return {
        ...state,
        isLoading: true,
      }
    case 'OPEN_PRODUCT_DETAILS':
      return {
        ...state,
        product: action.payload,
        isLoading: false,
      }
    case 'PRODUCT_DETAILS_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      }
    case 'ID_FROM_PRODUCT':
      return {
        ...state,
        idPage: action.payload,
      }
    case 'ADD_TO_CART_SAGA':
      return {
        ...state,
        prodcutToBuy: [...state.prodcutToBuy, action.payload],
        sum: state.sum + action.payload.id,
      }
    case 'DELETE_FROM_CART_SAGA':
      return {
        ...state,
        prodcutToBuy: state.prodcutToBuy.filter((_, i) => i !== action.payload),
        sum: state.sum - state.prodcutToBuy[action.payload].id,
      }
    default:
      return state
  }
}

export default reducerCartRedux
