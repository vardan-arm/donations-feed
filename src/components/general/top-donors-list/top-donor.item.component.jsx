import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';

import richManImage from '../../../static/rich-man.svg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  logo: {
    backgroundImage: `url(${richManImage})`,
    width: 48,
    height: 48,
  },
  title: {
    padding: theme.spacing(0, 2),
    fontSize: 24,
  },
}));

const TopDonorItemComponent = ({ donor }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        component="div"
        className={classes.root}
      >
        <Grid item xs={1} component="div">
          <div className={classes.logo} />
        </Grid>
        <Grid item xs={11} component="div">
          <div className={classes.title}>{donor.title}</div>
        </Grid>
      </Grid>
    </Paper>
  );
};

TopDonorItemComponent.propTypes = {
  donor: PropTypes.shape({
    title: PropTypes.string,
  }),
};
TopDonorItemComponent.defaultProps = {
  donor: {
    title: '',
  },
};

export default TopDonorItemComponent;
