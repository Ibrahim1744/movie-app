import React from 'react';
import './watched.css'
import { useMovieContext } from '../context/GlobalContext';
import MovieCard from '../MovieCard/MovieCard';
const Watched = () => {
 const MoviesContext=useMovieContext();
  return (
    <>
      <div className='watched'>
        <div className="container">
        <div className="watched-header">
            <h1 className='watched-title'>Watched Movies</h1>
              <span className='movies-count'>{MoviesContext.watched.length} {MoviesContext.watched.length === 1 ? " Movie" : " Movies"}</span>
            </div>
            {MoviesContext.watched.length > 0 ? (<div className='movie-grid'>
              {MoviesContext.watched.map((movie)=>{
                return(
                  <MovieCard key={movie.imdbID} movie={movie} type="watched"/>
                )
              })}
            </div>) : (<h1 className='no-movies'>There's no movies in your playlist , add some</h1>)}
        </div>
      </div>
    </>
  );
}

export default Watched;
