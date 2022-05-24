import React from 'react';

import MainNavigation from './MainNavigation';


const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='https://via.placeholder.com/200x200' alt='' />
            </div>
            <MainNavigation/>
            <div className='auth'>
                <img src='https://via.placeholder.com/200x200' alt='' />
            </div>
        </div>
    );
};

export default Header;
