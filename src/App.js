import React from 'react';
import {connect} from 'react-redux';
import {autoLogin} from './actions/userActions'
import UsersContainer from './containers/UsersContainer'
import Navbar from "./containers/Navbar";
import Search from './components/Search'

class App extends React.Component {

  // componentDidMount(){
  //   this.props.autoLogin()
  // }

  render() {
    return (
      <div className="app">
        <Navbar />
        {
        !this.props.userReducer.loggedIn ? <h1>Sign Up or Login!</h1> : <h1>Welcome {this.props.userReducer.user.user.email}</h1>
        }
        <Search />
        <UsersContainer />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);