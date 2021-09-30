import React from 'react';
import '../CSS/Nav.module.css';

const Navbar = () => {
    return <div className='nav'>
        <div className='item'>
            <div>
                <a> Profile</a>
            </div>
            <div>
                <a> Messages</a>
            </div>
            <div>
                <a> News</a>
            </div>
            <div>
                <a> Music</a>
            </div>
            <div>
                <a> Settings</a>
            </div>
        </div>
    </div>
}

export default Navbar;