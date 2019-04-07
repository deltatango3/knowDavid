import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchMovieList,
  setDisplayedMovieList
} from '../../actions/movies/moviesActionCreators';
import {
  getMovieList,
  getDisplayedMovieList
} from '../../reducers/rootReducer';
import { DragDropContext } from 'react-beautiful-dnd';
import Movies from './Movies';

const MoviesContainer = props => {
  useEffect(() => {
    props.fetchMovieList();
  }, []);

  const onDragEnd = result => {
    const { destination, source } = result;

    if (source.index === destination.index) {
      return;
    }

    const movieList = [...props.displayedMovieList];
    movieList.splice(source.index, 1);
    movieList.splice(
      destination.index,
      0,
      props.displayedMovieList[source.index]
    );
    props.setDisplayedMovieList(movieList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Movies movieList={props.displayedMovieList} />
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  movieList: getMovieList(state),
  displayedMovieList: getDisplayedMovieList(state)
});

export default connect(
  mapStateToProps,
  { fetchMovieList, setDisplayedMovieList }
)(MoviesContainer);
