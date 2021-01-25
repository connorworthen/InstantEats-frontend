import React from 'react'
import '../footer.css'

class Footer extends React.Component {

  render() {
    return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About Us</h6>
            <p className="text-justify">InstantEats <i className="fas fa-utensils"></i>  is a delivery application based on doordash. The goal of this application is for a the user to be able to find restaurants then select which items they would like to add to cart. The user can edit items from the cart and see the updated total in real time. Ultimately, this application will have a checkout function while also having the cart moved to the navbar for easier UI.  <i class="fas fa-utensils"></i> </p>
          </div>
    
          <div className="col-xs-6 col-md-3">
            <h6>Links</h6>
            <ul className="footer-links">
              <li>Contact Us</li>
              <li>Company Policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright <i className="far fa-copyright"></i>; 2021 All Rights Reserved by InstantEats
            </p>
          </div>
    
          {/* <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer