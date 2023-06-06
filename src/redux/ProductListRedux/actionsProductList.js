export const addToCart = (item, setItem) => {
  const cart = {
    item,
    id: Date.now(),
  }
  return {
    type: 'ADD_TO_CART',
    payload: cart,
  }
}

export const removeFromCart = (cart) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: cart.id,
  }
}

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  }
}
