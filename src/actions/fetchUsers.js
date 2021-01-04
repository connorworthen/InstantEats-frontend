export function fetchUsers() {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/users')
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'FETCH_USERS',
      payload: users
    }))
  }
} 