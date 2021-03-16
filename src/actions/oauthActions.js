
export const googleAuth = (profileObj) => {
    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/login', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(profileObj)
    })
    .then(resp => resp.json())
    .then(data => dispatch(
      {type: 'SET_USER', payload: data},
      localStorage.setItem("token", data.token)
    ))
  }
}

// need to set google auth to signup form to accept user data and create token