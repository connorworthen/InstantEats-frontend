import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContainer from './containers/userContainer.js'
import {connect} from 'react-redux'
import {fetchLoggedInUser} from './fetchRequestss/fetchUser'
import {logOutUser} from './actions/userAction'

class App extends React.Component {

  componentDidMount(){
    this.fetchEverything()   
  }

  fetchEverything = () => { 
    this.props.fetchLoggedInUser()
  }

  logOut = ()=>{
    localStorage.removeItem("token")
    this.props.logOutUser()
    alert("Succefully log out!")
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={UserContainer} />
            <Route exact path="/signup" render={props=><UserContainer {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return{
    login: state.user.login
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
    logOutUser: ()=>dispatch(logOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);