import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const DonationsRendererComponent = ({ donationsList }) => {
  const classes = useStyles();

  return donationsList.map(item => {
    return (
      <Paper key={item.id} className={classes.root}>
        <Typography variant="h6">{item.title}</Typography>
      </Paper>
    );
  });
};

export default DonationsRendererComponent;
