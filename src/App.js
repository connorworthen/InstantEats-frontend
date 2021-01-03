import React, { Component } from 'react';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
    };
  }

render() {
    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
      </div>
  </Router>
      );
  }
}
export default App;