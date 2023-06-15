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

export const addManyCustomers = (customers) => {
  return {
    type: 'ADD_MANY_CUSTOMERS',
    payload: customers,
  }
}

export const addSagaCustomers = (customers) => {
  return {
    type: 'ADD_SAGA_CUSTOMERS',
    payload: customers,
  }
}

export const asyncAddManyCustomers = (customers) => {
  return {
    type: 'ASYNC_ADD_MANY_CUSTOMERS',
    payload: customers,
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
