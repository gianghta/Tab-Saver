import React from 'react';

const NoFoundAlert = () => {
    return (
        <div class="mx-4 alert alert-secondary" role="alert">
            <h4 class="alert-heading">Error 404!</h4>
            <p>Could not find your search</p>
        </div>
    );
}

export default NoFoundAlert;