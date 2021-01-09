import React from 'react';

class UserInput extends React.Component {
  
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    address: '',
    phone_number: '' 
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <label>First Name: </label>
          <input
            type="text" 
            placeholder="First Name" 
            name="first_name" value={this.state.first_name} 
            onChange={this.handleChange}
          /><br></br>

          <label>Last Name: </label>
          <input
            type="text" 
            placeholder="Last Name" 
            name="last_name" 
            value={this.state.last_name} 
            onChange={this.handleChange} 
          /><br></br>

          <label>Email: </label>
          <input
            type="email" 
            placeholder="Email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange} 
          /><br></br>

          <label>Password: </label>
          <input
            type="password" 
            placeholder="Password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange} 
          /><br></br>

          <label>Address: </label>
          <input 
            type="text" 
            placeholder="Address" 
            name="address" 
            value={this.state.address} 
            onChange={this.handleChange} 
          /><br></br>

          <label>Phone Number: </label>
          <input 
            type="text" 
            placeholder="Phone Number" 
            name="phone_number" 
            value={this.state.phone_number} 
            onChange={this.handleChange} 
          /><br></br>

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default UserInput