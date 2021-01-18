const defaultState = {
  id: [],
  total: 0
}

export default function cartReducer(state = defaultState, action ) {
  switch (action.type) {
    case 'ADD_TO_CART':
      debugger
      return {
        id: action.payload,
        total: state.total + 1
      }
    default:
      console.log(state) 
      return state
  }
}