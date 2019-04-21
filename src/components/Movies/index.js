import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchMovieList,
  setDisplayedMovieList,
  setAreMovieListsMatching
} from '../../actions/movies/moviesActionCreators';
import {
  getMovieList,
  getDisplayedMovieList,
  getAreMovieListsMatching
} from '../../reducers/rootReducer';
import { DragDropContext } from 'react-beautiful-dnd';
import Movies from './Movies';

const MoviesContainer = props => {
  useEffect(() => {
    props.fetchMovieList();
  }, []);

  const isListEqual = (newList, originalList) => {
    for (let i = 0; i < originalList.length; i++) {
      if (originalList[i].title !== newList[i].title) {
        return false;
      }
    }
    props.setAreMovieListsMatching();
  };

  const onDragEnd = result => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (source.index === destination.index) {
      return;
    }

    const newMovieList = [...props.displayedMovieList];
    newMovieList.splice(source.index, 1);
    newMovieList.splice(
      destination.index,
      0,
      props.displayedMovieList[source.index]
    );
    props.setDisplayedMovieList(newMovieList);
    isListEqual(newMovieList, props.movieList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Movies
        movieList={props.displayedMovieList}
        areMovieListsMatching={props.areMovieListsMatching}
      />
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  movieList: getMovieList(state),
  displayedMovieList: getDisplayedMovieList(state),
  areMovieListsMatching: getAreMovieListsMatching(state)
});

export default connect(
  mapStateToProps,
  { fetchMovieList, setDisplayedMovieList, setAreMovieListsMatching }
)(MoviesContainer);
