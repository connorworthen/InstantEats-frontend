
export default function menuReducer(state = {menus: []}, action ) {
  switch (action.type) {
    case 'FETCH_MENUS':
      return {menus: action.payload}
    default: 
      return state
  }
}