import React from 'react'
// import '../css/searchBar'

class Search extends React.Component {

  render() {
    return (
    // <div style={{ backgroundImage: "url(/hero.jpg)", 
    // minHeight: 'calc(100vh - 60px)',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center' }}>
    <div className="hero" >
      <div className="home-page">
        <header className="cover">
          <div className="cover-wrapper">
            <div className="cover-content">
              <h3 className="search-title">Every Restaurant at your fingertips</h3>
            </div>
            <form className="search-form-container" _lpchecked="1" />
              <div className="search-field">
              <div className="react-autosuggest__container">
                <input type="text" className="search-input" placeholder="Enter Delivery Address" value="" />
              </div>
              </div>
              <div>
                <input type="submit" className="search-submit-button" value="Find Restaurants"/>
              </div>
            </div>
        </header>
      </div>
    </div>
    )
  }
}

export default Search