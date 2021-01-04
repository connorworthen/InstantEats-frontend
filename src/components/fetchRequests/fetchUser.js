import {loginUser} from '../actions/userAction'

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

export function loginFetch(userInfo){
  return dispatch=>fetch('http://localhost:3001/api/v1/sessions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo)})
    .then(resp => resp.json())
    .then(data=>{
      let user_json = JSON.parse(data.user)
      localStorage.setItem("token", data.jwt)
      dispatch(loginUser(user_json))
    })
}

export function fetchLoggedInUser(){
  return dispatch => {
    const token = localStorage.token
    if (token) {
      return fetch('http://localhost:3001/api/v1/auto-login', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => { 
        dispatch(loginUser(data))               
      })
    }
  }
}
