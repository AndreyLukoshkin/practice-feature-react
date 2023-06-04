const defaultState = {
  customers: [],
}

const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_CUSTOMER':
      return { ...state, customers: [...state.customers, action.payload] }
    case 'ADD_MANY_CUSTOMERS':
      return { ...state, customers: [...state.customers, ...action.payload] }
    case 'REMOVE_CUSTOMER':
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      }
    case 'CLEAR_LIST_CUSTOMERS':
      return { customers: [] }
    default:
      return state
  }
}

export const addManyCustomersAction = (payload) => ({
  type: 'ADD_MANY_CUSTOMERS',
  payload,
})

export default customerReducer
