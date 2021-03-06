import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { useSelector } from 'react-redux';

import { getScrollStoppingPointSelector } from '../../store/reducers/scroll.reducer';
import DonationPopupComponent from './donation-popup.component';
import DonationsComponent from './donations-list/donations.component';
import TotalSumPopupComponent from './total-sum-popup.component';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 'calc(100vh - 55px)',
    overflow: 'hidden',
  },
});

const ListWrapperComponent = () => {
  const classes = useStyles();
  const scrollStoppingPoint = useSelector(getScrollStoppingPointSelector);

  return (
    <div className={classes.root}>
      <div>
        <DonationPopupComponent />
        <TotalSumPopupComponent />
        <DonationsComponent topPosition={scrollStoppingPoint} />
      </div>
    </div>
  );
};

export default ListWrapperComponent;
