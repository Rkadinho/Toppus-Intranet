import React, { useState } from 'react'
import '../css/table.css'
import Approvers from './approvers.js'

const ApproversTable = () => {
    const [approvers, setApprovers] = useState([
        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },

        {
            request: 'XXXXX XXXXX XXXX',
            primary: 'XXXX XXXXX',
            secundary: 'XXXX XXXXX'
        },
    ]);

    return(
        <div>
            <table className='title'>
                <tr>
                    <th>TIPO DE SOLICITAÇÃO</th>
                    <th>APROVADOR PRINCIPAL</th>
                    <th>APROVADOR ALTERNATIVO</th>
                </tr>
            </table>
            <Approvers approvers={approvers} />
        </div>
    )
}

export default ApproversTable;