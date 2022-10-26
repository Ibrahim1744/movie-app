import React from 'react';
import MovieControl from '../MovieControls/MovieControl';

const MovieCard = ({movie , type}) => {
  return (
    <>
      <div className="movie-card">
        <div className="over-lay"></div>
        {movie.Poster ? (<img src={movie.Poster} alt={movie.Title}></img>) : (<div className='filter-poster'></div>)}
        <MovieControl movie={movie} type={type} />
      </div>
    </>
  );
}

export default MovieCard;
