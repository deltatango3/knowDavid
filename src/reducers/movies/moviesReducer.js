import actions from '../../actions/actionTypes';

const movieState = {
  movieList: [],
  displayedMovieList: []
};

const moviesReducer = (state = movieState, action) => {
  switch (action.type) {
    case actions.SET_MOVIE_LIST:
      return { ...state, movieList: action.data };
    case actions.SET_DISPLAYED_MOVIE_LIST:
      return { ...state, displayedMovieList: action.data };
    default:
      return state;
  }
};

export default moviesReducer;

export const getMovieList = state => state.movieList;
export const getDisplayedMovieList = state => state.displayedMovieList;
