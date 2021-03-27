const setUser = (payload) => ({ type: "SET_USER", payload})

export const logUserOut = () => ({type: "LOG_OUT"})

export const signupUser = (first, last, email, password, phone_number) => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/signup', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({
        user: {
          first: first,
          last: last,
          email: email,
          password: password,
          phone_number: phone_number
        }
      })
    })
    .then(resp => resp.json())
    .then(data => dispatch(
      {type: 'SET_USER', payload: data},
      localStorage.setItem("token", data.token)
    ))
  }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
      // debugger
      fetch('http://localhost:3001/api/v1/login', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'POST',
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      })
    })
    .then(resp => resp.json())
    .then(data => dispatch(
      {type: 'SET_USER', payload: data},
      localStorage.setItem("token", data.token)
    ))
  }
}

export const autoLogin = () => dispatch => {
  fetch('http://localhost:3001/api/v1/auto_login', {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.token)
      dispatch(setUser(data.user))
    })
}

