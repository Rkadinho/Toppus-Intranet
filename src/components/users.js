import React from 'react'
import User from './user'

const Users = ({ users }) => {
    return(
        <div>
            {users.map((user) => (<User user={user}/>))}
       </div>
    )
};

export default Users;