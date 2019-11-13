// import '../../styles/custom-styles.css';

import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';

import DonationsComponent from './donations-list/donations.component';
// import { DonationsListContext } from './main-wrapper.component';
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
  // const { isScrolling } = useContext(DonationsListContext);

  return (
    <div className={classes.root}>
      {/*<div
        id="list-wrapper-component"
        style={{ border: '1px solid' }}
        className={isScrolling ? classes.wrapperWithMovingContents : ''}
      >*/}
      <div>
        <DonationsComponent topPosition={100} />
        <TopDonorsComponent />
      </div>
    </div>
  );
};

export default ListWrapperComponent;
