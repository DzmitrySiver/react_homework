import React from 'react';
import MovieTiles from "../../../../common/components/MovieTiles/MovieTiles";
import mockData from  './mockTiles'

const SearchResults = (params) =>
    <MovieTiles list={mockData}/>;

export default SearchResults;