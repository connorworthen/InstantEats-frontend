import React from 'react'

const Carts = (props) => {

  console.log(props)
  
  return (
    <div>
        {props.carts && props.carts.map(cart =>
        <div key={cart.id}>
          {cart.total}
        </div>)}
      </div>
  )
}

export default Carts
