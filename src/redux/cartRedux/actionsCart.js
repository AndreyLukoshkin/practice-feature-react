export const addToCart = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  }
}

export const deleteFromCart = (ind) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: ind,
  }
}
