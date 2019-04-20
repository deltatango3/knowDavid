import actions from '../actionTypes';

export const fetchMovieList = () => ({
  type: actions.FETCH_MOVIE_LIST
});

export const setDisplayedMovieList = data => ({
  type: actions.SET_DISPLAYED_MOVIE_LIST,
  data
});

export const setAreMovieListsMatching = () => ({
  type: actions.SET_ARE_MOVIE_LISTS_MATCHING
});
