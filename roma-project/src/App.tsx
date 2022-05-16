import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import Clay from './pages/Clay';
import Painting from './pages/Painting';
import Home from './pages/Home';
import Origami from './pages/Origami';
import Icibana from './pages/Icibana';
import Plasticine from './pages/Plasticine';

import Header from './components/Header';


const App = () => {
    return (
        <div className='container'>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/clay' element={<Clay />} />
                    <Route path='/painting' element={<Painting />} />
                    <Route path='/plasticine' element={<Plasticine />} />
                    <Route path='/origami' element={<Origami />} />
                    <Route path='/ikibana' element={<Icibana />} />
                </Routes>
                <footer>
                    <p style={{textAlign: 'center', padding: '20px'}}>FOOTER</p>
                </footer>
            </Router>
        </div>
    );
};

export default App;
