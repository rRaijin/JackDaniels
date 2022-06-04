import React from "react";


interface IAvatarProps {
    pictureName?: string;
}


const AvatarComponent = (props: IAvatarProps) => {
    const imgSrc = props.pictureName ? `/pictures/foilder/${props.pictureName}` : '/default-avatar.png';
    return (
        <div className="w-8 h-8">
            <img className="rounded-full" src={imgSrc} alt="user-avatar" />
        </div>
    );
};

export default AvatarComponent;
