import React from 'react';


interface IPictureProps {
    item: any;
    className?: string;
}


const Picture = (props: IPictureProps) => {
    const { item, className } = props;

    return (
        <div className={className}>
            {
                item ?
                <img
                    src={`/pictures/${item.pictureFolder}/${item.pictureName}`}
                    className='w-full'
                    alt={item.pictureName}/> :
                <></>
            }
        </div>
    );
};

export default Picture;

