import React from 'react';
import {connect} from 'react-redux';
import UsersContainer from './containers/UsersContainer'
import Navbar from "./containers/Navbar";

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Navbar />
        <UsersContainer />
      </div>
    )
  }
}


export default connect()(App);