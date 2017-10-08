
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Netflix from './Netflix';

const NetflixRouter = () =>
    <BrowserRouter>
        <div>
            <Route path='/' component={Netflix}/>
        </div>
    </BrowserRouter>;

export default NetflixRouter;
