import React from 'react';

import { ClayStaff } from '../../constants/enums';


interface IClayTabItemProps {
    name: ClayStaff;
    imgSrc: string;
    description: string;
}


const ClayTabItem = (props: IClayTabItemProps) => {
    const { imgSrc, description } = props;

    return (
        <div className='flex border-2 border-t-0 bg-olive'>
            <div className='w-1/4'>
                <img src={imgSrc} alt=''/>
            </div>
            <div className='w-3/4'>
                {description}
            </div>
        </div>
    );
};

export default ClayTabItem;
