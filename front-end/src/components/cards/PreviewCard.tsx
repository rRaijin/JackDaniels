import React, { FC } from "react";
import moment from "moment";
import AvatarComponent from "../Avatar";

import Picture from "../Picture";


interface IItemProps {
    name: string;
    description: string;
    createdAt: string;
}


interface IPreviewCardProps {
    className?: string;
    item: IItemProps;
    index: number;
}


const PreviewCard: FC<IPreviewCardProps> = ({ className, item, index }) => {
    const getMarginPos = index % 2 !== 0 ? 'ml-2' : 'mr-2';

    return (
        <div className={className} key={`${item.name}-${index}`}>
            <div className="py-2">
                <div
                    className={'flex flex-col ' + getMarginPos}
                    key={`${item.hasOwnProperty('name') ? item.name : 'item'}-${index}`}>
                    <h3 className='text-center text-2xl w-full uppercase font-bold bg-steel text-white'>{item.name}</h3>
                    <div className='flex'>
                        <Picture
                            className='w-1/3 py-2'
                            item={item}/>
                        <p className="w-2/3 p-2">
                            {item.description}
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <div className="w-2/3 flex items-center justify-end pr-4">
                            <AvatarComponent user={null}/>
                            <p className="ml-2">Azovskiy Aiwazovskiy</p>
                        </div>
                    </div>
                    <div className="flex">
                        <p>Created: {moment(item.createdAt).format('lll')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewCard;
