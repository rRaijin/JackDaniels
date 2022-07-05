import React from 'react';

import MainNavigation from './MainNavigation';
import AvatarComponent from './Avatar'


const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='https://via.placeholder.com/200x200' alt='' />
            </div>
            <MainNavigation/>
            <AvatarComponent user={null}/>
        </div> 
    );
};

export default Header;
