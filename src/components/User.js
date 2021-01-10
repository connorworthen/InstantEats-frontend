import React from 'react'


const User = (props) => {
  console.log(props)
  return (
    <div>
      <li>{props.user.email} + {props.user.address}</li>
    </div>
  )
}

export default User