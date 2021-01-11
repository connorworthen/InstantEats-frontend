import React from 'react';
import {connect} from 'react-redux';
import UsersContainer from './containers/UsersContainer'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <UsersContainer />
      </div>
    )
  }
}


export default connect()(App);