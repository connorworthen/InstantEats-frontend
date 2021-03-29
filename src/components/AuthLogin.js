import React from 'react'
import {connect} from 'react-redux';
import {refreshTokenGoogle} from '../utils/refreshTokenGoogle'
import {refreshTokenFacebook} from '../utils/refreshTokenFacebook'
// import FacebookLogin from 'react-facebook-login';
import FacebookLoginWithButton from 'react-facebook-login'
import GoogleLogin from 'react-google-login';
import {googleAuth} from '../actions/oauthActions'
import {facebookAuth} from '../actions/oauthActions'
// import GoogleButton from 'react-google-button'

const AuthLogin  = (props) => {

  const facebookId = "1530624210459288"
  const googleId = "52473665366-id5h9o0on0jp6mrlm6otc9tr47j0f9bl.apps.googleusercontent.com"

  const responseGoogle = (res) => {
    const profileObj = res.profileObj.email
    props.refreshTokenGoogle(res)
    props.googleAuth(profileObj)
  }

  const responseFacebook = (fields) => {
    const profileObj = fields.name
    // props.refreshTokenFacebook(fields)
    props.facebookAuth(profileObj)
  }

  return (
    <div>
        <GoogleLogin
          clientId={googleId}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

        <FacebookLoginWithButton
          appId={facebookId}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook"
        />
  </div>
  )
}

export default connect(null, {googleAuth, facebookAuth, refreshTokenGoogle, refreshTokenFacebook})(AuthLogin)