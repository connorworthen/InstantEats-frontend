const setUser = (payload) => ({ type: "LOGIN_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

export const signupUser = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/signup', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(user => dispatch({type: 'CREATE_USER', payload: user}), localStorage.setItem("token", data.token))
  }
}

export const loginUser = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/login', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(user => dispatch({type: 'LOGIN_USER', payload: user}))
  }
}

export const autoLogin = () => dispatch => {
    fetch('http://localhost:3001/api/v1/login', {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {localStorage.setItem("token", data.token) 
      dispatch(setUser(data.user))
    })
}

