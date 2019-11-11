import '../../styles/custom-styles.css';

import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';

import DonationsComponent from './donations.component';
import TopDonorsComponent from './top-donors.component';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 'calc(100vh - 55px)',
    overflow: 'hidden',
  },
});

const ListWrapperComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="wrapper-with-moving-contents">
        <DonationsComponent />
        <TopDonorsComponent />
      </div>
    </div>
  );
};

export default ListWrapperComponent;
