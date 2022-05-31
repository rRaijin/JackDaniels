import React from 'react';
import moment from 'moment';


const PreloadedList = (props) => {
    const { dataFetched, errorMsg, dataLoaded, list } = props;

    return (
        <div>
            {
                dataFetched ?
                    errorMsg === '' ?
                        <div className='sculptures-list'>
                            {
                                dataLoaded ?
                                    list.map((item, index) => {
                                        return (
                                            <div key={`item${index}`} className={`sculpture-item${index+1}`}>
                                                <img src={`/pictures/${item.pictureFolder}/${item.pictureName}`} alt={item.name} />
                                                <span className='email-id'>{`${item.id+')'} ${item.name}`}</span>
                                                <h3>{item.description}</h3>
                                                <p>Created: {moment(item.createdAt).format('lll')}</p>
                                                <br/>
                                            </div>
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
