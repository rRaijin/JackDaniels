import React from 'react';


interface IPictureProps {
    item: any;
}


const Picture = (props: IPictureProps) => {
    const { item } = props;

    return (
        <React.Fragment>
            {
                item ?
                <img
                    src={`/pictures/${item.pictureFolder}/${item.pictureName}`}
                    className='w-full'
                    alt={item.pictureName}/> :
                <></>
            }
        </React.Fragment>
    );
};

export default Picture;

