import { combineReducers } from 'redux';
import moviesReducer, * as moviesSelectors from './movies/moviesReducer';

const reducers = combineReducers({ movies: moviesReducer });

export default reducers;

export const getMovieList = state => moviesSelectors.getMovieList(state.movies);
