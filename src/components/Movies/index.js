import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovieList } from '../../actions/movies/moviesActionCreators';
import { getMovieList } from '../../reducers/rootReducer';
import Movies from './Movies';

const MoviesContainer = props => {
  useEffect(() => {
    props.fetchMovieList();
  }, []);
  return <Movies />;
};

const mapStateToProps = state => ({
  movieList: getMovieList(state)
});

export default connect(
  mapStateToProps,
  { fetchMovieList }
)(MoviesContainer);
