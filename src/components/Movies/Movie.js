import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, Grid } from '@material-ui/core';

const styles = {
  movieTile: {
    flex: '1 0 20%',
    height: '25vw'
  },
  movieCard: {
    height: '100%'
  }
};

const Movie = props => {
  return (
    <Grid item className={props.classes.movieTile}>
      <Card className={props.classes.movieCard} square raised>
        <CardMedia
          className={props.classes.movieCard}
          image={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
        />
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(Movie);
