import React from 'react'
import '../css/table.css'

const User = ({ user }) => {
    return(
        <div>
            <table>
                <tr>
                    <td>{user.name}</td>
                    <td>{user.position}</td>
                    <td>{user.department}</td>
                    <td className='number'>{user.number}</td>
                    <td>{user.contact}</td>
                    <td className='email' >{user.email}</td>
                </tr>
            </table>
        </div>
    )
};


export default User
