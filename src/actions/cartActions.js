export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addToCart = (restaurant, item) => {
  return {
    type: 'ADD_TO_CART',
    payload: {restaurant, item}
  }
}

export const deleteItem = (cart) => {
  return {
    type: 'DELETE_ITEM',
    payload: cart
  }
}