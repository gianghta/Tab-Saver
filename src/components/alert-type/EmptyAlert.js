import React from 'react';

const EmptyAlert = () => {
    return (
        <div class="mx-4 alert alert-danger" role="alert">
            <h4 class="alert-heading">EMPTY!</h4>
            <p>List is currently empty</p>
        </div>
    );
}

export default EmptyAlert;