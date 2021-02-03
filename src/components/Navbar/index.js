import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton';

const Navbar = () => {
    return (
        <>
            <Link to="/">Home</Link> |
            <Link to="/about"> About</Link>
            <LoginButton />
        </>
    )
}

export default Navbar;