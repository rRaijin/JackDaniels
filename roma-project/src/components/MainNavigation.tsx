import React from 'react';
import { Link } from 'react-router-dom';

import menuList from '../mockData/menu';


const MainNavigation = () => {
    return (
        <ul className='main-nav'>
            {
                menuList.map((el , i) => {
                    const w = `${100 / menuList.length}%`;

                    return (
                        <li key={`main_nav${i}`} style={{width: w}} className='main-nav-item'>
                            <Link
                                to={el.src}>
                                {el.name}
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default MainNavigation;
