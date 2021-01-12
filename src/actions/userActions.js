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
    .then(user => dispatch({type: 'CREATE_USER', payload: user}))
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

