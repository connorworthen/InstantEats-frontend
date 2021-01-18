import React from 'react'
import { useSelector } from 'react-redux'

const Carts = (props) => {

  // const cart = useSelector(state => state.cart.cart)

  return (
    <div>
        {props.cart.map(item =>
        <div key={item.id}>
          {item.total}
        </div>)}
      </div>
  )
}

export default Carts
