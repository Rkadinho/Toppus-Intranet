import React, { useState } from 'react'
import '../css/table.css'
import Users from './users.js'

const Table = () => {
    const [users, setUsers] = useState([
        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },


        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

        {
            name: 'XXXXXX XXXXXX',
            position: 'XXXXXX',
            department: 'XXXXXX',
            number: 'XXXX',
            contact: <a href='tel:0000000' className='number'>XXXX-XXXX</a>,
            email: <a href='mailto:teste@teste.com' className='email'>xxxx@xxxx.xxz</a>
        },

    ]);
    return(
        <div>
            <table className='title'>
                <tr>
                    <th>NOME</th>
                    <th>CARGO</th>
                    <th>DEPARTAMENTO</th>
                    <th>RAMAL</th>
                    <th>CONTATO</th>
                    <th className='email'>E-MAIL</th>
                </tr>
            </table>
            <Users users={users}/>  
        </div>
    )

}
export default Table;
