import React from 'react';
import fetch from 'cross-fetch';


class Clay extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            sculptures: [],
            dataLoaded: false,
            dataFetched: false,
            stupidDefence: false,
            errorMsg: ''
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick () {
        const { dataFetched } = this.state;
        if (dataFetched) {
            this.setState({
                sculptures: [],
                dataFetched: false
            });
        } else {
            this.setState({
                dataFetched: true,
                stupidDefence: true
            }, () => {
                setTimeout(() => {
                    fetch('http://jsonplaceholder.typicode.com/comments?postId=1')
                        .then((res) => {
                            if (res.status >= 400) {
                                console.log('Error');
                                this.setState({
                                    errorMsg: 'Server error!'
                                });
                            } else {
                                // const promiseExample = new Promise((resolve, reject) => {
                                //     console.log('res: ', res);
                                //     resolve(this.setState({errorMsg: 'BARADA'}));
                                //     reject(res.json());
                                // });
                                // return await promiseExample;
                                return res.json();
                            }
                        })
                        .then(res => {
                            this.setState({
                                sculptures: res,
                                dataLoaded: true,
                                stupidDefence: false
                            });
                        })
                        .catch(() => {
                            this.setState({errorMsg: 'Incorrect format of data'});
                        });
                }, 1000);
            });
        }
    }

    render() {
        const { dataLoaded, dataFetched, sculptures, stupidDefence, errorMsg } = this.state;
        const btnText = dataFetched ? 'RESET' : 'GET DATA';

        return (
            <div className=''>
                <div>
                    <button
                        className=''
                        disabled={stupidDefence}
                        onClick={this.handleOnClick}>
                        {btnText}
                    </button>
                </div>
                <div>
                    {
                        dataFetched ?
                            errorMsg === '' ?
                                <div className='sculptures-list'>
                                    {   
                                        dataLoaded ?
                                            sculptures.map((item, index) => {
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
            </div>
        );
    }

}

export default Clay;
