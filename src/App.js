import React from 'react';
import {connect} from 'react-redux';
import UsersContainer from './containers/UsersContainer'
import Navbar from "./containers/Navbar";
import Search from './containers/Search'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Navbar />
        <Search />
        <UsersContainer />
      </div>
    )
  }
}


export default connect()(App);