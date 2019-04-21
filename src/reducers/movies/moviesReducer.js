import actions from '../../actions/actionTypes';

const movieState = {
  movieList: [],
  displayedMovieList: [],
  areMovieListsMatching: false
};

const moviesReducer = (state = movieState, action) => {
  switch (action.type) {
    case actions.SET_MOVIE_LIST:
      return { ...state, movieList: action.data };
    case actions.SET_DISPLAYED_MOVIE_LIST:
      return { ...state, displayedMovieList: action.data };
    case actions.SET_ARE_MOVIE_LISTS_MATCHING:
      return { ...state, areMovieListsMatching: true };
    default:
      return state;
  }
};

export default moviesReducer;

export const getMovieList = state => state.movieList;
export const getDisplayedMovieList = state => state.displayedMovieList;
export const getAreMovieListsMatching = state => state.areMovieListsMatching;
