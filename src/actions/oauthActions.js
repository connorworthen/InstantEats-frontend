export const SET_USER = 'SET_USER';

export const googleAuth = (profileObj) => {
  return {
    type: 'SET_USER',
    payload: {profileObj}
  }
}

export const facebookAuth = (profileObj) => {
  return {
    type: 'SET_USER',
    payload: {profileObj}
  }
}