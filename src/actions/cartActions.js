export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addToCart = (restaurant, menu) => {
  return {
    type: 'ADD_TO_CART',
    payload: {restaurant, menu}
  }
}

export const deleteItem = (cart) => {
  return {
    type: 'DELETE_ITEM',
    payload: cart
  }
}