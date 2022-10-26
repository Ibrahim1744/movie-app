import React from 'react';
import { useMovieContext } from '../context/GlobalContext';
import './card.css'
import * as actions from '../context/ActionTypes'
const Card = ({movie}) => {
  const MovieContext=useMovieContext()
  const storedMovie=MovieContext.watchlist.find((o)=> o.imdbID === movie.imdbID)
  const storedMovieWatched=MovieContext.watched.find((o)=> o.imdbID === movie.imdbID)
  const watchlistDisabled= storedMovie ? true : storedMovieWatched ? true : false;
  const watchedDisabled= storedMovieWatched ? true : false
  return (
    <>
      <div className='card'>
          <div className="card-img">
            {movie.Poster ? <img src={movie.Poster} alt={movie.Title}/> : (<div className="filter-poster"></div>) }
          </div>
          <div className="card-info">
            <h2 className='movie-title'>{movie.Title}</h2>
            {movie.Year ? <h4 className='movie-year'>{movie.Year}</h4> : "-"}
              <div className='card-btns'>
                <button onClick={()=> MovieContext.MoviesDispatch(
                  {type : actions.ADD_MOVIE_TO_WATCH_LIST  , payload: movie}
                )} className='button-49' disabled={watchlistDisabled} >Add to watch list</button>
                <button onClick={()=> MovieContext.MoviesDispatch(
                  {type:actions.ADD_MOVIE_TO_WATCHED , payload: movie}
                )} className='button-49' disabled={watchedDisabled}>Add to watched</button>
              </div>
          </div>
      </div>
    </>
  );
}

export default Card;
