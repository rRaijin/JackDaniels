import React, { FC } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

import PreviewCard from '../cards/PreviewCard';


interface IItemsListProps {
    className?: string;
    list: any[];
    error: FetchBaseQueryError | SerializedError;
    isLoading: boolean;
}


const ItemsList: FC<IItemsListProps> = ({ className, list, error, isLoading }) =>
    <div className={className}>
        {isLoading && <div>Loading...</div>}
        {
            error ?
            <div>Get an error</div> :
                list && list.length > 0 ?
                    list.map((item, index) =>
                        <PreviewCard
                            className='flex w-1/2'
                            item={item}
                            index={index}/>
                    ) : <div>No data</div>
        }
    </div>

export default ItemsList;
