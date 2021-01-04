import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from './actions/fetchUsers';

class App extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="app">
        App
      </div>
    )
  }
}


export default connect()(App);