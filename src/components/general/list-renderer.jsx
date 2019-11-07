import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';

import { DonationsListContext } from './main-wrapper.component';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

// const ListRendererComponent = ({ itemsList }) => {
const ListRendererComponent = () => {
  const classes = useStyles();

  const donationsList = useContext(DonationsListContext);

  // return itemsList.map(item => {
  return donationsList.map(item => {
    return (
      <Paper key={item.id} className={classes.root}>
        <Typography variant="h6">{item.title}</Typography>
      </Paper>
    );
  });
};

export default ListRendererComponent;
