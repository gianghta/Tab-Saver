import React from 'react';

const AddBtn = props => {
    return <button type="button" className="btn btn-primary btn-lg m-2 mb-3" onClick={props.addItem}>Add</button>;
};

export default AddBtn;