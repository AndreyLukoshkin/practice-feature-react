const defaultState = {
  customers: [],
}

const ADD_SAGA_CUSTOMERS = 'ADD_SAGA_CUSTOMERS'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const REMOVE_ALL_CUSTOMERS = 'REMOVE_ALL_CUSTOMERS'

const sagaCustomerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SAGA_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers, ...action.payload],
      }
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      }
    case REMOVE_ALL_CUSTOMERS:
      return { customers: [] }
    default:
      return state
  }
}

export default sagaCustomerReducer
