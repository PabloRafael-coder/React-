import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/home';

import Users from './containers/users';


function routesPage() {

    return (
        <Router>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/usuarios' element={<Users/>} />
            </Routes>
        </Router>

    )

};

export default routesPage