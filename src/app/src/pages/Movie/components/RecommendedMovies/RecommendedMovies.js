import React from 'react';
import MovieTiles from '../../../../common/components/MovieTiles/MovieTiles';
import mockData from './mockTiles';

const RecommendedMovies = () =>
    <MovieTiles list={mockData}/>;

export default RecommendedMovies;