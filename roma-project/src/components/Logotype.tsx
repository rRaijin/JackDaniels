import React from 'react';


// interface ILogotypeProps {
//     logoWord: string;
// }

const Logotype = (props) => {
    // const { logoWord } = props;
    return (
        <div className='logo'>
            {props.logoWord}
        </div>
    );
};

export default Logotype;
