import React from 'react';
import { useMovieContext } from '../context/GlobalContext';
import './watchlist.css'
import MovieCard from '../MovieCard/MovieCard';
const Watchlist = () => {
  const MoviesContext=useMovieContext()
  return (
    <>
      <div className="watch-list">
          <div className="container">
            <div className="watch-list-header">
            <h1 className='watchlist-title'>My Watch List :</h1>
              <span className='movies-count'>{MoviesContext.watchlist.length} {MoviesContext.watchlist.length === 1 ? " Movie" : " Movies"}</span>
            </div>
            {MoviesContext.watchlist.length > 0 ? (<div className='movie-grid'>
              {MoviesContext.watchlist.map((movie)=>{
                return(
                  <MovieCard key={movie.imdbID} movie={movie} type="watchlist"/>
                )
              })}
            </div>) : (<h1 className='no-movies'>There's no movies in your playlist , add some</h1>)}
             
          </div>
      </div>
    </>
  );
}

export default Watchlist;
