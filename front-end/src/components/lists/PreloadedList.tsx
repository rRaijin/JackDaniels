import React from 'react';
import moment from 'moment';
import Picture from '../Picture';


interface IPreloadedListProps {
    dataFetched: boolean;
    errorMsg: string;
    dataLoaded: boolean;
    list: any[]
}

const PreloadedList = (props: IPreloadedListProps) => {
    const { dataFetched, errorMsg, dataLoaded, list } = props;

    return (
        <div>
            {
                dataFetched ?
                    errorMsg === '' ?
                        <div className='catalog'>
                            {
                                dataLoaded ?
                                    list.map((item, index) => {
                                        const shortDesc = '';
                                        return (
                                            <React.Fragment>
                                            <div key={`${item.hasOwnProperty('name') ? item.name : 'item'}-${index}`} className='catalog-item'>
                                                <Picture item={item}/>
                                                <h3 className=''>{item.name}</h3>
                                                <h3>{item.description}</h3>
                                                <p>Created: {moment(Number(item.createdAt)).format('lll')}</p>
                                                <br/>
                                            </div>
                                            <div key={`${item.hasOwnProperty('name') ? item.name : 'item'}-${index}`} className='catalog-item'>
                                                <Picture item={item}/>
                                                <h3 className=''>{item.name}</h3>
                                                <p>{item.description}</p>
                                                <p>Created: {moment(Number(item.createdAt)).format('lll')}</p>
                                                <br/>
                                            </div>
                                            </React.Fragment>
                                        );
                                    }) :
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
