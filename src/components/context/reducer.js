import * as actions from "./ActionTypes";
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_MOVIE_TO_WATCH_LIST:
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      };
    case actions.REMOVE_MOVIE_FROM_WATCH_LIST:
      return {
        ...state,
        watchlist: state.watchlist.filter((movie)=> movie.imdbID !== action.payload.imdbID)
      };
      case actions.MOVE_TO_WATCH_LIST:
        return {
          ...state,
          watched: state.watched.filter((movie)=> movie.imdbID !== action.payload.imdbID),
          watchlist: [ action.payload , ...state.watchlist]
        };

        
        case actions.ADD_MOVIE_TO_WATCHED:
          return {
            ...state,
            watchlist: state.watchlist.filter((movie)=> movie.imdbID !== action.payload.imdbID),
            watched: [action.payload , ...state.watched]
          };
        case actions.REMOVE_MOVIE_FROM_WATCHED:
          return {
            ...state,
            watched: state.watched.filter((movie)=> movie.imdbID !== action.payload.imdbID)
          };
          default : 
          return state;
  }
};
