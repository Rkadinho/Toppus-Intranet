import React from 'react'
import '../css/table.css'

const Approver = ({ approver }) => {
    return(
        <div>
            <table>
                <tr>
                    <td>{approver.request}</td>
                    <td>{approver.primary}</td>
                    <td>{approver.secundary}</td>
                </tr>
            </table>
        </div>
    )
};

export default Approver;