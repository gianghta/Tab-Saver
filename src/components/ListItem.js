import React from 'react';
import DeleteBtn from './DeleteBtn';

const ListItem = ({ url, title, icon }) => {
    return (
        <a href={ url } className="list-group-item list-group-item-action d-flex flex-row align-items-center">
            <i className="m-2 far fa-bell fa-lg"></i>
            <div className="m-2 flex-column">
                <div>{ title }</div>
                <div className="badge badge-info badge-pill">Test annotation</div>
            </div>
            <DeleteBtn />
        </a>
    );
};

export default ListItem;
