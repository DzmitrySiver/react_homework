
import React from 'react';
import Footer from './common/components/Footer/Footer';
import {
    SiteWrapper,
    ContentWrapper
} from './common/styles/ContentWrapper.styles';
import {Route} from 'react-router';
import NoMoviesFound from './pages/Search/NoMoviesFound';
import Search from './pages/Search/Search';
import Movie from './pages/Movie/Movie';

const Netflix = ({children}) =>
    <SiteWrapper>
        <ContentWrapper>
            <Route exact path='/' component={NoMoviesFound}/>
            <Route path='/search/:query' component={Search}/>
            <Route path='/Movie/:title' component={Movie}/>
        </ContentWrapper>
        <Footer/>
    </SiteWrapper>;

export default Netflix;
