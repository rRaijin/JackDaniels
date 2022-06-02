import React, { useState, useEffect } from 'react';

import clayService from '../services/clay.service';
import PreloadedList from '../components/lists/PreloadedList';


const Clay = () => {
    const [sculptures, setSculptures] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        setDataFetched(true);
        setTimeout(() => {
            clayService.getAll()
            .then((res) => {
                if (res.status >= 400) {
                    console.log('Error');
                    setErrorMsg('Server error!');
                } else return res;
            })
                .then(res => {
                    setSculptures(res.data);
                    setDataLoaded(true);
                })
                .catch(() => setErrorMsg('Incorrect format of data'));
        }, 1000);
    }, [dataFetched]);

    return (
        <div className=''>
            <PreloadedList
                dataFetched={dataFetched}
                errorMsg={errorMsg}
                dataLoaded={dataLoaded}
                list={sculptures}/>
        </div>
    );
};


export default Clay;
