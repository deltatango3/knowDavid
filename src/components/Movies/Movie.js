import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Grid } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';

const styles = {
  movieCard: {
    flex: '0 0 20%',
    height: '25vw'
  },
  movieTile: {
    height: '100%'
  }
};

const Movie = props => {
  return (
    <Draggable draggableId={props.movie.id} index={props.index}>
      {provided => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={props.classes.movieCard}
        >
          <Grid item className={props.classes.movieTile}>
            <Card square raised className={props.classes.movieCard}>
              <CardMedia
                className={props.classes.movieTile}
                image={`https://image.tmdb.org/t/p/w500${
                  props.movie.poster_path
                }`}
              />
            </Card>
          </Grid>
        </div>
      )}
    </Draggable>
  );
};

export default withStyles(styles)(Movie);
