import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovieList } from '../../actions/movies/moviesActionCreators';
import { getMovieList } from '../../reducers/rootReducer';
import Movies from './Movies';

const MoviesContainer = props => {
  useEffect(() => {
    props.fetchMovieList();
  }, []);

  const randomizeList = list => {
    const listCopy = [...list];
    return listCopy.sort(function() {
      return 0.5 - Math.random();
    });
  };

  const randomizedMovieList = randomizeList(props.movieList);
  return <Movies movieList={randomizedMovieList} />;
};

const mapStateToProps = state => ({
  movieList: getMovieList(state)
});

export default connect(
  mapStateToProps,
  { fetchMovieList }
)(MoviesContainer);
