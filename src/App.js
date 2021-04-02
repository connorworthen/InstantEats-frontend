import React from 'react';
import {connect} from 'react-redux';
import {autoLogin} from './actions/userActions'
import RestaurantsContainer from './containers/RestaurantsContainer'
import Nav from "./containers/Navbar";
// import Search from './containers/Search'
import {Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import UserSignin from './components/UserSignin'
import UserSignup from './components/UserSignup'
import Footer from './containers/Footer'
import Body from './containers/Body'

class App extends React.Component {

  // componentDidMount(){
  //   this.props.autoLogin()
  // }

  render() {
    return (
      <div className="app">
        <Nav />
        {/* <Route exact path='/' component={Search} /> */}
        <RestaurantsContainer />
        <Route path='/signup' component={UserSignup} />
        <Route exact path='/login' component={UserSignin} />  
        <Route exact path='/cart' component={Checkout} />
        <Body />
        <Footer />
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