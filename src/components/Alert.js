import React from 'react';

import { EmptyAlert, NoFoundAlert } from './alert-type';

const Alert = ({ flag }) => {
    if (flag) {
        return <EmptyAlert />
    } else {
        return <NoFoundAlert />
    }
}

export default Alert;