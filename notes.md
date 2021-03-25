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


<div>
        <header className="nav-bar">
          <ul className="nav-bar-items">
            <li>
              
                <div className="nav-logo">
                  {/* <img src="https://seat-check-seeds.s3-us-west-1.amazonaws.com/sleeper-chair.png" /> */}
                  <h1 className="logo">Instant Eats</h1>
                </div>
              
            </li>
            { ! props.userReducer.loggedIn ? 
            <li>
              <nav class="greeting-links">
                <Link to="/signup" className="form-button-signup nav-button">Sign up</Link>
                <Button className="form-button-signin nav-button" variant="primary" onClick={handleShow}>
                  
              </Button>
              </nav>
            </li>
              :
                  <Dropdown>          
                    <Dropdown.Toggle variant="danger" size="sm" id="dropdown-basic">
                      <i className="far fa-user-circle" aria-hidden="true"></i>
                      Hi, {props.userReducer.user.profileObj}
                    </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              }
          </ul>
        </header>