import React from 'react';
import {
    Tile,
    TileImage,
    TileTitle,
    TileMovieInfo,
    TileMovieYear,
    TileMovieGroup,
    TileMovieDescription
} from './MovieTile.styles';

const MovieTile = ({movie}) =>
    <Tile to={`/movie/${movie.title}`}>
        <TileImage url={movie.image}/>
        <TileMovieDescription>
            <TileMovieInfo>
                <TileTitle>{movie.title}</TileTitle>
                <TileMovieYear>{movie.year}</TileMovieYear>
            </TileMovieInfo>
            <TileMovieGroup>{movie.category}</TileMovieGroup>
        </TileMovieDescription>
    </Tile>;

export default MovieTile;