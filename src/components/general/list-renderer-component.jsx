// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';

import DonationsRendererComponent from '../helper-components/donations-renderer-component';
import { DonationsListContext } from './main-wrapper.component';

// const ListRendererComponent = ({ itemsList }) => {
const ListRendererComponent = () => {
  // const classes = useStyles();

  const { donationsList } = useContext(DonationsListContext);

  // return itemsList.map(item => {
  /*return donationsList.map(item => {
    return (
      <Paper key={item.id} className={classes.root}>
        <Typography variant="h6">{item.title}</Typography>
      </Paper>
    );
  });*/
  return <DonationsRendererComponent donationsList={donationsList} />;
};

export default ListRendererComponent;
