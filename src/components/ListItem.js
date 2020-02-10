/*global chrome*/
import React from 'react';
import DeleteBtn from './DeleteBtn';

import Icon from '../assets/icon1.png';

const ListItem = ({ url, title, icon, deleteItem, clickLink }) => {
    const handleParentClick = e => {
        if (e.target === e.currentTarget) {
            clickLink(url);
        }
    }

    const handleChildClick = e => {
        e.stopPropagation();
        clickLink(url);
    }

    return (
        <div
        className="list-group-item list-group-item-action d-flex flex-row align-items-center" onClick={handleParentClick}
        >
            <img
                className="icon"
                src={ (icon === null || icon === "" || icon === undefined) ? Icon : icon }
                alt="website icon"
                onClick={handleChildClick}
            />
            <div className="m-2 flex-column" onClick={handleChildClick}>
                <div onClick={handleChildClick}>{ title }</div>
            </div>
            <DeleteBtn del={deleteItem} linkTitle={title}/>
        </div>
    );
};

export default ListItem;
