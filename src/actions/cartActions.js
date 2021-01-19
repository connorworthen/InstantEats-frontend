export const ADD_TO_CART = 'ADD_TO_CART';
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