import React from 'react'
// import '../css/searchBar'

class Search extends React.Component {

  state = {
    address: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log("here")
    // this.props.loginUser(this.state)
    // this.setState({
    //   address: '' 
    // })
    this.props.history.push('/restaurants')
  }

  render() {
    return (
    <div className="hero" >
      <div className="home-page">
        <header className="cover">
          <div className="cover-wrapper">
            <div className="cover-content">
              <h3 className="search-title">Every Restaurant at your fingertips</h3>
            </div>
            <form onSubmit={this.handleSubmit} />
              <div className="search-field">
              <div className="react-autosuggest__container">
                <input type="text" className="search-input" placeholder="Enter Delivery Address" name="address" value={this.state.address} onChange={this.handleChange} />
              </div>
              </div>
              <div>
                <input type="submit" className="search-submit-button" value="Find Local Restaurants"/>
              </div>
            </div>
        </header>
      </div>
    </div>
    )
  }
}

export default Search