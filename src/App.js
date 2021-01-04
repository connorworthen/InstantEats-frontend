import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from './actions/fetchUsers';

class App extends React.Component {

  componentDidMount() {
    // fetch('http://localhost:3001/api/v1/users')
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }

  render() {
    return (
      <div className="app">
        App
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }


export default connect(null, {fetchUsers})(App);