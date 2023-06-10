export const addToCart = (products, price, id) => {
  return {
    type: 'SET_PRODUCTS',
    payloadName: products,
    payloadPrice: price,
    payloadId: id,
  }
}

export const deleteFromCart = (product, price, i, sum) => {
  console.log(price, i)
  return {
    type: 'DELETE_PRODUCT',
    payload: product,
    payloadPrice: price,
    payloadI: i,
    payloadSum: sum,
  }
}
