
export const signupUser = (data) => {
  debugger
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/users', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
  }
}