import React from 'react';

const Member = ({member}) => {
    return (
        <div className="member-name">
            The member of BNK48 that you like is <span>{member}</span>
        </div>
    )
}
export default Member;