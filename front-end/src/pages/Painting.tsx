import React from 'react';
import fetch from 'cross-fetch';


interface IPaintingProps {

}

interface IPaintingState {
    loaded: boolean;
    pictures: any[];
}


class Painting extends React.Component<IPaintingProps, IPaintingState> {
    constructor(props: IPaintingProps) {
        super(props);

        this.state = {
            loaded: false,
            pictures: []
        };
    }

    componentDidMount() {
        console.log('MOUNTED');
        setTimeout(() => {
            fetch('http://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    if (res.status >= 400) {
                        throw new Error('Bad response from server');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log('data: ', data);
                    this.setState({
                        loaded: true,
                        pictures: data
                    });
                })
                .catch((err) => console.log('Error: ', err));
        }, 1000);
    }

    componentWillUnmount() {
        console.log('component will unmounted');
    }

    render() {
        const { loaded, pictures } = this.state;

        return (
            <div className='pictures-head'>
                {
                    loaded ?
                        pictures.map((item, i) => {
                            return (
                                <div key={`pict_prev_${i}`} className='picture-preview'>
                                    <img src='https://via.placeholder.com/50x50' alt={`picture-preview-${i}`} />
                                    <h3>{item.title}</h3>
                                    <p>
                                        {item.body}
                                    </p>
                                </div>
                            );
                        }) :
                        <div>LOADING...</div>
                }
            </div>
        );
    }
}

export default Painting;
