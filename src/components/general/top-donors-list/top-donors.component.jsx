import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { useSelector } from 'react-redux';

import { getDonationsListSelector } from '../../../store/reducers/donations.reducer';
import { getTopDonorsSelector } from '../../../store/reducers/top-donors.reducer';
import TopDonorItemComponent from './top-donor.item.component';

const useStyles = makeStyles({
  root: {
    // position: 'relative',
  },
  topDonorsMoving: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    // animation: '$topDonorsMover 5s infinite alternate', // commented, as need to discuss how top donors' list should be shown
  },
  /*'@keyframes topDonorsMover': {
    '0%': {
      top: 0,
    },
    '100%': {
      // top: '-200%',
      top: '-100%',
    },
  },*/
});

const TopDonorsComponent = () => {
  const classes = useStyles();

  const topDonorsList = useSelector(getTopDonorsSelector);
  const donationsList = useSelector(getDonationsListSelector);

  if (donationsList.length > 0) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={classes.topDonorsMoving}>
        {topDonorsList.map(donor => (
          <TopDonorItemComponent key={donor.id} donor={donor} />
        ))}
      </div>
    </div>
  );
};

export default TopDonorsComponent;
