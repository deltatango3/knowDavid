import actions from '../actionTypes';

export const fetchMovieList = () => ({
  type: actions.FETCH_MOVIE_LIST
});

export const setDisplayedMovieList = data => ({
  type: actions.SET_DISPLAYED_MOVIE_LIST,
  data
});
