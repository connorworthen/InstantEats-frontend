Tasks:

1. NavBar UI fix.
   A. Login & Signup Button
   B. Profile Icon & User name & Logout
2. Home Page
   A. Update UI on form + button
   B. Photo behind bar
   C. Footer w/ links to github, linkedin, twitter
3. Restaurant Index
   A. Fix style boxes
   B. Attach Images to each restaurant (active models)
4. Indivdual Restaurant Ids
   A. Fix display of Restaurant info w/ photo
   B. Render Menu new UI
   C. Fix add to cart buttons
5. Cart UI
   A. Fix render cart design
   B. Fix button for delete item

Pratice tests:
A. Filters (A-Z, Category, Price, etc)
B. Search Bar by restaurant name
C. Check over all tested info (write down)

If have time (extra):
A. Checkout Page post cart
B. Cart Moved to sidebar update in restaurant/:id
C. Modal for signup/login
D. Modal for each menu item

{ ! props.userReducer.loggedIn ? 
            <li>
              <nav class="greeting-links">
                <span className="form-button-signin" variant="primary" onClick={handleLoginShow}>Sign In</span>
                <button className="form-button-signup" variant="primary" onClick={handleSignupShow}>Sign Up</button>

              <Modal show={showSignup} onHide={handleSignupClose}>
                <Modal.Header closeButton>
                    <h1 className="header-type">Sign Up</h1>
                </Modal.Header>
                <Modal.Body>
                  <h6 className="header-link">Already have an account?  <Link to="/login" className="color-link">Sign In</Link></h6><br></br>
                  <AuthLogin />
                </Modal.Body>
                <Modal.Body><UserSignup /></Modal.Body>
              </Modal>

              <Modal show={showLogin} onHide={handleLoginClose}>
                <Modal.Header closeButton>
                  <h1 className="header-type">Login Form</h1>
                </Modal.Header>
                <Modal.Body>
                  <h6 className="header-link">New to Instant Eats?  <Link to="/signup" className="color-link">Create Account</Link></h6><br></br>
                  <AuthLogin />
                </Modal.Body>
                <Modal.Body><UserSignin /></Modal.Body>
              </Modal>
              </nav>

            </li>
              :
                <Dropdown>          
                  <Dropdown.Toggle variant="danger" size="sm" id="dropdown-basic">
                    <i className="far fa-user-circle" aria-hidden="true"></i>
                    {/* Hi, {props.userReducer.user.user.email} */}
                    Hi, {props.userReducer.user.profileObj}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>                    
                    </Dropdown.Menu>
                </Dropdown>
              }


              <header className="nav-bar">
          <ul className="nav-bar-items">
            <li>
              
                <div className="nav-logo">
                  <Link to="/"><h1 className="logo"><i class="fas fa-utensils"></i>  Instant Eats</h1></Link>
                </div>
              
            </li>
            
          </ul>
        </header>