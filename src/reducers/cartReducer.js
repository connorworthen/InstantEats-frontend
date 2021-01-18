const defaultState = {
  cart: {
    id: [],
    total: 0
  }
}

export default function cartReducer(state = defaultState, action ) {
  switch (action.type) {
    case 'ADD_TO_CART':
      debugger
      return {
        cart: {
          id: action.payload,
          total: 1
        }
      }
    default: 
      return state
  }
}