import React, { useState, useCallback } from 'react';

import clayService from '../services/clay.service';
import PreloadedList from '../components/lists/PreloadedList';


const Clay = () => {
    const [sculptures, setSculptures] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);
    const [stupidDefence, setStupidDefence] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const btnText = dataFetched ? 'RESET' : 'GET DATA';

    const handleOnClick = useCallback(async () => {
        if (dataFetched) {
            setSculptures([]);
            setDataFetched(false);
        } else {
            setDataFetched(true);
            setStupidDefence(true);
            setTimeout(() => {
                // fetch('http://jsonplaceholder.typicode.com/comments?postId=1')
                clayService.getAll()
                // .then((res) => {
                //     if (res.status >= 400) {
                //         console.log('Error');
                //         setErrorMsg('Server error!');
                //     } else return res.json();
                // })
                    .then(res => {
                        setSculptures(res.data);
                        setDataLoaded(true);
                        setStupidDefence(false);
                    })
                    .catch(() => setErrorMsg('Incorrect format of data'));
            }, 1000);
        }
    }, [dataFetched]);

    return (
        <div className=''>
            <div>
                <button
                    className=''
                    disabled={stupidDefence}
                    onClick={handleOnClick}>
                    {btnText}
                </button>
            </div>
            <PreloadedList
                dataFetched={dataFetched}
                errorMsg={errorMsg}
                dataLoaded={dataLoaded}
                list={sculptures}/>
        </div>
    );
};


// class Clay extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state= {
//             sculptures: [],
//             dataLoaded: false,
//             dataFetched: false,
//             stupidDefence: false,
//             errorMsg: ''
//         };
//         this.handleOnClick = this.handleOnClick.bind(this);
//     }

//     handleOnClick () {
//         const { dataFetched } = this.state;
//         if (dataFetched) {
//             this.setState({
//                 sculptures: [],
//                 dataFetched: false
//             });
//         } else {
//             this.setState({
//                 dataFetched: true,
//                 stupidDefence: true
//             }, () => {
//                 setTimeout(() => {
//                     fetch('http://jsonplaceholder.typicode.com/comments?postId=1')
//                         .then((res) => {
//                             if (res.status >= 400) {
//                                 console.log('Error');
//                                 this.setState({
//                                     errorMsg: 'Server error!'
//                                 });
//                             } else {
//                                 // const promiseExample = new Promise((resolve, reject) => {
//                                 //     console.log('res: ', res);
//                                 //     resolve(this.setState({errorMsg: 'BARADA'}));
//                                 //     reject(res.json());
//                                 // });
//                                 // return await promiseExample;
//                                 return res.json();
//                             }
//                         })
//                         .then(res => {
//                             this.setState({
//                                 sculptures: res,
//                                 dataLoaded: true,
//                                 stupidDefence: false
//                             });
//                         })
//                         .catch(() => {
//                             this.setState({errorMsg: 'Incorrect format of data'});
//                         });
//                 }, 1000);
//             });
//         }
//     }

//     render() {
//         const { dataLoaded, dataFetched, sculptures, stupidDefence, errorMsg } = this.state;
//         const btnText = dataFetched ? 'RESET' : 'GET DATA';

//         return (
//             <div className=''>
//                 <div>
//                     <button
//                         className=''
//                         disabled={stupidDefence}
//                         onClick={this.handleOnClick}>
//                         {btnText}
//                     </button>
//                 </div>
//                 <PreloadedList
//                     dataFetched={dataFetched}
//                     errorMsg={errorMsg}
//                     dataLoaded={dataLoaded}
//                     list={sculptures}/>
//             </div>
//         );
//     }

// }

export default Clay;
