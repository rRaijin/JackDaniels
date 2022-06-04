import React from 'react';

import PreviewCard from '../cards/PreviewCard';


interface IPreloadedListProps {
    className?: string;
    dataFetched: boolean;
    errorMsg: string;
    dataLoaded: boolean;
    list: any[]
}

const PreloadedList = (props: IPreloadedListProps) => {
    const { dataFetched, errorMsg, dataLoaded, list, className } = props;

    return (
        <div className={className}>
            {
                dataFetched ?
                    errorMsg === '' ?
                        <div className='flex flex-wrap mb-4'>
                            {
                                dataLoaded ?
                                    list.map((item, index) =>
                                        <React.Fragment>
                                            <PreviewCard
                                                className='flex w-1/2'
                                                item={item}
                                                index={index}/>
                                            <PreviewCard
                                                className='flex w-1/2'
                                                item={item}
                                                index={index+1}/>
                                        </React.Fragment>
                                    ) :
                                    <div>Loading...</div>
                            }
                        </div> :
                        <div>{errorMsg}</div> :
                    <div>No data</div>
            }
        </div>
    );
};

export default PreloadedList;
