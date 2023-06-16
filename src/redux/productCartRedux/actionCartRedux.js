// load products for Worker
export const actionCartRedux = (products) => {
  return {
    type: 'ADD_PRODUCTS',
    payload: products,
  }
}

// load products useEffect
export const asyncActionCartRedux = (products) => {
  return {
    type: 'ASYNC_ADD_PRODUCTS',
    payload: products,
  }
}

// Get product from array
export const actionProductDetails = (product) => {
  return {
    type: 'OPEN_PRODUCT_DETAILS',
    payload: product,
  }
}

// get Product ID
export const idFromProduct = (productId) => {
  return {
    type: 'ID_FROM_PRODUCT',
    payload: productId,
  }
}

export const addProductToCartModel = (productToBuy) => {
  return {
    type: 'ADD_TO_CART_SAGA',
    payload: productToBuy,
  }
}

export const deleteProductFromCartSaga = (id) => {
  return {
    type: 'DELETE_FROM_CART_SAGA',
    payload: id,
  }
}
