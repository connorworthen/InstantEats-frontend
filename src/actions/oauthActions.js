
export const googleAuth = (id_token) => {
    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/login', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      method: 'POST',
      body: JSON.stringify(id_token)
    })
    .then(resp => resp.json())
    .then(data => dispatch(
      {type: 'SET_USER', payload: data},
      localStorage.setItem("token", data.token)
    ))
  }
}