import React from 'react'
import {connect} from 'react-redux';
import {loginFetch} from '../fetchRequests/fetchUser'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginErrors: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginFetch(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }

render() {
  return (
      <div>
        <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>

        </form>  
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
    return {
      loginFetch: (userInfo) => dispatch(loginFetch(userInfo))
    }
  }

export default connect(null, mapDispatchToProps)(Login)