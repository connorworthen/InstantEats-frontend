const defaultState = {
    loggedIn: false,
    user: {},
    authProfile: {}
}

export default function userReducer(state = defaultState, action ) {
  switch (action.type) {
    case 'SET_USER':
      debugger
      return {
        loggedIn: true,
        user: {...action.payload}
      }
    case 'AUTH_USER':
      return {
        loggedIn: true,
        authProfile: {...action.payload}
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