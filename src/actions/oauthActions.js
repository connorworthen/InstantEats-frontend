
export const googleAuth = (id_token, profileObj) => {
    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/authenticate', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(id_token, profileObj)
    })
    .then(resp => resp.json())
    .then(data => dispatch(
      {type: 'AUTH_USER', payload: data},
      localStorage.setItem("token", data.token)
    ))
  }
}

// need to set google auth to signup form to accept user data and create token
// need own method backend to accept google auth