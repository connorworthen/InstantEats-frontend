import React from 'react';
import {connect} from 'react-redux';
import {autoLogin} from './actions/userActions'
import RestaurantsContainer from './containers/RestaurantsContainer'
import Navbar from "./containers/Navbar";
import Search from './containers/Search'
import {Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import UserLogin from './components/UserLogin'
import UserSignup from './components/UserSignup'

class App extends React.Component {

  // componentDidMount(){
  //   this.props.autoLogin()
  // }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Search />
        <RestaurantsContainer />
        <Route path='/signup' component={UserSignup} />
        <Route exact path='/login' component={UserLogin} />  
        <Route exact path='/cart' component={Checkout} />
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