export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM = 'DELETE_ITEM';
// export const REMOVE_ITEM = 'REMOVE_ITEM';
// export const SUB_QUANTITY = 'SUB_QUANTITY';
// export const ADD_QUANTITY = 'ADD_QUANTITY';
// export const ADD_SHIPPING = 'ADD_SHIPPING';

export const addToCart = (restaurant, menu) => {
  return {
    type: 'ADD_TO_CART',
    payload: {restaurant, menu}
  }
}

export const deleteItem = (restaurant, menu) => {
  return {
    type: 'DELETE_ITEM',
    payload: {restaurant, menu}
  }
}