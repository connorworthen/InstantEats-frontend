import React from 'react'


const Restaurant = (props) => {
  
  return (
    <div>
      <li>{props.restaurant.name} + {props.user.distance}</li>
    </div>
  )
}

export default Restaurant