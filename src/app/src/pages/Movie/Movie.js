import React from 'react';
import MovieHeader from './components/MovieHeader/MovieHeader';
import MovieStatusBar from './components/MovieStatusBar/MovieStatusBar';
import {
    PageContainer,
    PageMainArea
} from '../../common/styles/PageContainer.styles';
import RecommendedMovies from './components/RecommendedMovies/RecommendedMovies';

const Movie = () =>
    <PageContainer>
        <MovieHeader/>
        <MovieStatusBar/>
        <PageMainArea>
            <RecommendedMovies/>
        </PageMainArea>
    </PageContainer>;

export default Movie;