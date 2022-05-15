import React from 'react';
import Logotype from './Logotype';
import MainNavigation from './MainNavigation';


const Header = () => {
    const LOGO_TXT = 'logo123';
    const menuList: string[] = ['item1', 'item2', 'item3', 'item4'];

    return (
        <React.Fragment>
            <Logotype logoWord={LOGO_TXT}/>
            <MainNavigation menuList={menuList}/>
        </React.Fragment>
    );
};

export default Header;
