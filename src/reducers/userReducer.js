const defaultState = {
    loggedIn: false,
    user: {}
}

export default function userReducer(state = defaultState, action ) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        loggedIn: true,
        user: {...action.payload}
      }
    case 'SET_USER':
      return {
        loggedIn: true,
        user: {...action.payload}
      }
    case "LOG_OUT":
      localStorage.clear()
        return {
          loggedIn: false,
          user: {}
        }
    default: 
      return state
  }
}

// return {...state, users: [...state.users, action.payload]}