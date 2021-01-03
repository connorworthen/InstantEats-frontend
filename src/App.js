import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  checkLoginStatus() {
    axios.get("http://localhost:3000/api/v1/logged_in", { withCredentials: true })
    .then(response => {
      console.log("logged in?", response)
    })
    .catch(error => {
      console.log("logged_in? error", error)
    })
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user
    })
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route
            exact path={"/"}
            render={props => (
              <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
            )}   
            />
            <Route 
            exact path={"/dashboard"} 
            render={props => (
              <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
            )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}