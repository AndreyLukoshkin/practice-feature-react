export const addCustomer = (name, setValueInput) => {
  setValueInput('')
  const customer = {
    name,
    id: Date.now(),
  }
  return {
    type: 'ADD_CUSTOMER',
    payload: customer,
  }
}

export const removeCustomer = (customer) => {
  return {
    type: 'REMOVE_CUSTOMER',
    payload: customer.id,
  }
}
