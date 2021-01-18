import React from 'react';
import {connect} from 'react-redux'
// import Carts from '../components/Carts'

class CartsContainer extends React.Component {

  
  render() {
    return (
      <div>
        {this.props.cartReducer.carts.total}
        {}
        {/* <Carts /> */}
        {/* {props.cartReducer.carts && props.cartReducer.carts.items.map(cart =>
        <div key={cart.id}>
          {cart.total}
        </div>)} */}
      </div>
    )
  }
}
const mapToStateProps = state => {
  console.log(state)
  return {
    cartReducer: state.cartReducer
  }
}

export default connect(mapToStateProps)(CartsContainer)