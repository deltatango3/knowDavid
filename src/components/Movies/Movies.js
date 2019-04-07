import React from 'react';
import Movie from './Movie';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Droppable } from 'react-beautiful-dnd';

const styles = {
  list: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto'
  }
};

const Movies = props => {
  const getMovies = () => {
    return props.movieList.map((movie, index) => {
      return <Movie key={movie.id} movie={movie} index={index} />;
    });
  };

  return (
    <Droppable droppableId="movie-list" direction="horizontal">
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={props.classes.list}
        >
          <Grid container>{getMovies()}</Grid>
        </div>
      )}
    </Droppable>
  );
};

export default withStyles(styles)(Movies);
