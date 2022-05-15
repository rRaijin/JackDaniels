import React from 'react';


const MainNavigation = (props) => {
    const { menuList } = props;

    return (
        <div>
            <ul className='main-nav'>
                {
                    menuList.map((el , i) => {
                        const css = i%2 === 0 ? 'text-red' : 'text-green';
                        return (
                            <li key={`main_nav${i}`} className={css}>{el.text}</li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default MainNavigation;
