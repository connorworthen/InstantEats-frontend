import React from 'react';
import {connect} from 'react-redux';
import {autoLogin} from './actions/userActions'
import RestaurantsContainer from './containers/RestaurantsContainer'
import UsersContainer from './containers/UsersContainer'
import Navbar from "./containers/Navbar";
import Home from './containers/Home'

class App extends React.Component {

  // componentDidMount(){
  //   this.props.autoLogin()
  // }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Home />
        <UsersContainer />
        <RestaurantsContainer />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(null, mapDispatchToProps)(App);