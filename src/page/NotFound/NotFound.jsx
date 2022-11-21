import React from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            This page doesn't exist. Go<Link to="/">
                <span> Home</span></Link>
            <p>404 error</p>
        </div>
    );
}

export default NotFound;
