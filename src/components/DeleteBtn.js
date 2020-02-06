import React from 'react';

const DeleteBtn = ({ del, linkTitle }) => {
    return (
        <div className="ml-auto" onClick={() => {del(linkTitle)}}>
            <i className="far fa-trash-alt fa-lg"></i>
        </div>
    );
};

export default DeleteBtn;