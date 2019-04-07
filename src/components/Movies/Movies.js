import React from 'react';
import Movie from './Movie';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  list: {
    maxWidth: '1200px'
  }
};

const Movies = props => {
  const getMovies = () => {
    return props.movieList.map(movie => {
      return <Movie key={movie.id} movie={movie} />;
    });
  };

  return (
    <div className={props.classes.root}>
      <Grid container spacing={8} className={props.classes.list}>
        {getMovies()}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Movies);
