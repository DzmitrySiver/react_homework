import React from 'react';

import {
    MovieCast,
    MovieDescription,
    MovieLabel,
    MovieNote,
    MoviePoster,
    MoviePreview,
    MovieRating,
    MovieSummary,
    MovieTitle
} from './MovieInfo.styles';

const MovieInfo = ({movie}) =>
    <MoviePreview>
        <MoviePoster image={movie.poster}/>
        <MovieSummary>
            <MovieLabel>
                <MovieTitle>{movie.show_title}</MovieTitle>
                <MovieRating>{movie.rating}</MovieRating>
            </MovieLabel>
            <MovieDescription>{movie.category}</MovieDescription>
            <MovieNote>{movie.release_year}</MovieNote>
            <MovieNote>{movie.runtime}</MovieNote>
            <MovieDescription>{movie.summary}</MovieDescription>
            <MovieCast>{`Director: ${movie.director}`}</MovieCast>
            <MovieCast>{`Cast: ${movie.show_cast}`}</MovieCast>
        </MovieSummary>
    </MoviePreview>;

export default MovieInfo;