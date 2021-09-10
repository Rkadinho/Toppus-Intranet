import React from 'react'
import Approver from './approver'

const Approvers = ({ approvers }) => {
    return(
        <div>
            {approvers.map((approver) => (<Approver approver={approver}/>))}
        </div>
    )
};

export default Approvers;