import React from 'react'
import User from './User'

const Users = (props) => {

  return (
    <div>
      {props.users.map(user =>
        <div key={user.id}><User user={user}/></div> )}
    </div>
  )
}

export default Users