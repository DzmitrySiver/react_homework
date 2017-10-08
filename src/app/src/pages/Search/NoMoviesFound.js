import React from 'react';
import SearchHeader from './components/SearchHeader/SearchHeader';
import NoMoviesFoundMessage from './components/NoMoviesFoundMessage/NoMoviesFoundMessage';
import {
    PageContainer
} from '../../common/styles/PageContainer.styles';
import {
    StatusBar
} from '../../common/components/StatusBar/StatusBar.styles';

const NoMoviesFound = () =>
    <PageContainer>
        <SearchHeader/>
        <StatusBar/>
        <NoMoviesFoundMessage/>
    </PageContainer>;

export default NoMoviesFound;