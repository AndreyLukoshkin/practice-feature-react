export const addToCart = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  }
}

export const deleteFromCart = (product) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: product,
  }
}
