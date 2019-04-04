import actions from '../../actions/actionTypes';

const movieState = {
  movieList: []
};

const moviesReducer = (state = movieState, action) => {
  switch (action.type) {
    case actions.SET_MOVIE_LIST:
      return { ...state, movieList: action.data };
    default:
      return state;
  }
};

export default moviesReducer;

export const getMovieList = state => state.movieList;
