export const actionCartRedux = (products) => {
  return {
    type: 'ADD_PRODUCTS',
    payload: products,
  }
}

export const asyncActionCartRedux = (products) => {
  return {
    type: 'ASYNC_ADD_PRODUCTS',
    payload: products,
  }
}

export const actionProductDetails = (product) => {
  return {
    type: 'OPEN_PRODUCT_DETAILS',
    payload: product,
  }
}

export const idFromProduct = (productId) => {
  return {
    type: 'ID_FROM_PRODUCT',
    payload: productId,
  }
}
