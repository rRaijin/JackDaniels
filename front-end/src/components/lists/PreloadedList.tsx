import React from 'react';


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
                                                <span className='email-id'>{`${item.id+')'} ${item.email}`}</span>
                                                <h3>{item.body}</h3>
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
