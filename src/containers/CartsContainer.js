import React from 'react';
import {connect} from 'react-redux'

class CartsContainer extends React.Component {

  
  render() {
    return (
      <div>
        CartsContainer
      </div>
    )
  }
}
const mapToStateProps = state => {
  console.log(state)
  return {
    cart: state.cartReducer.cart
  }
}

export default connect(mapToStateProps)(CartsContainer)