import React from 'react';
import Header from '../../../../common/components/Header/Header';
import PageTitle from '../../../../common/components/PageTitle/PageTitle';
import mockedMovie from './mockedMovie';
import MovieInfo from '../MovieInfo/MovieInfo';

const MovieHeader = () =>
    <Header>
        <PageTitle/>
        <MovieInfo movie={mockedMovie}/>
    </Header>;

export default MovieHeader;
