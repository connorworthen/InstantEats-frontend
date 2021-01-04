export function createUser(userinfo){
  return dispatch => fetch('http://localhost:3001/api/v1/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userinfo)})
    .then(resp => resp.json())
    .then(data=>{
      let user_json = JSON.parse(data.user)
      localStorage.setItem("token", data.jwt)
      dispatch(loginUser(user_json))
    })
}