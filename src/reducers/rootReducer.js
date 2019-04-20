import { combineReducers } from 'redux';
import moviesReducer, * as moviesSelectors from './movies/moviesReducer';

const reducers = combineReducers({ movies: moviesReducer });

export default reducers;

export const getMovieList = state => moviesSelectors.getMovieList(state.movies);
export const getDisplayedMovieList = state =>
  moviesSelectors.getDisplayedMovieList(state.movies);
export const getAreMovieListsMatching = state =>
  moviesSelectors.getAreMovieListsMatching(state.movies);
