import React from 'react';
import fetch from 'cross-fetch';


class Clay extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            sculptures: [],
        };
    }

    render() {
        const { sculptures } = this.state;
        return (
            <div className='sculptures-list'>
                {
                    sculptures.map((item, index) => {
                        return (
                            <div key={`item${index}`} className={`sculpture-item${index+1}`}>
                                <span className='email-id'>{`${item.id+')'} ${item.email}`}</span>
                                <h3>{item.body}</h3>
                                <br/>
                            </div>
                        );
                    }) 
                }
            </div>
        );
    }

    componentDidMount() {
        console.log('Mounted');
        fetch('http://jsonplaceholder.typicode.com/comments?postId=1')
            .then(res => {
                if (res.status >= 400) {
                    console.log('Error');
                } else {
                    return res.json();
                }
            })
            .then(res => {
                this.setState({
                    sculptures: res,
                    load: true
                });
                console.log(res);
            })
            .catch(err => {
                console.log('Error:', err);
            });

    }
    componentWillUnmount() {
        console.log('Unmounted');

    }


}


export default Clay;