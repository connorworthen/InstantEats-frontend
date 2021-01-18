const defaultState = {
  carts: {
    // items: [],
    id: '',
    total: 0
  }
}

export default function cartReducer(state = defaultState, action ) {
  switch (action.type) {
    case 'ADD_TO_CART':
      // debugger
      return {
        carts: {
          // items: [{id: action.payload, total: 1}]
          id: action.payload,
          total: 1
        }
      }
    default: 
      return state
  }
}