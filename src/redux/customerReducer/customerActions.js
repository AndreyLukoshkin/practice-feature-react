export const addCustomer = (name, setValueCustomer) => {
  setValueCustomer('')
  const customer = {
    name,
    id: Date.now(),
  }
  return {
    type: 'ADD_CUSTOMER',
    payload: customer,
  }
}

export const removeCustomer = (customerId) => {
  return {
    type: 'REMOVE_CUSTOMER',
    payload: customerId,
  }
}

export const removeAllCustomers = () => {
  return {
    type: 'REMOVE_ALL_CUSTOMERS',
  }
}
