import React from 'react';
import Tiles from './MovieTiles.styles';
import MovieTile from './components/MovieTile/MovieTile';

const TileList = (list) => {
    return list.map((movie, key) =>
        <MovieTile key={key} movie={movie}/>
    );
};

const MovieTiles = ({list}) =>
    <Tiles>
        {TileList(list)}
    </Tiles>;

export default MovieTiles;