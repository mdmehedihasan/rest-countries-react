import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact-us">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;