import React from 'react'
import { Redirect } from 'react-router-dom'

class Search extends React.Component {

  state = {
    address: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.props.fetchRestaurants(this.state)
  //   this.setState({
  //     address: '' 
  //   })
  //   this.props.history.push('/restaurants')
  // }

  handleRedirect = () => {
    console.log("redirect to restaurant index based on if user signed in")
    return <Redirect to="/users/new" />
  }

  render() {
    return (
      <div>
        <h3>Enter Delivery Address</h3>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form >
          <input
            type="text" 
            placeholder="Address"
            name="address" value={this.state.address} 
            onChange={this.handleChange} 
          />

          <input type="submit" placeholder="Find Local Restaurants" onClick={this.handleRedirect} />
        
        </form>
      </div>
    )
  }
}

export default Search