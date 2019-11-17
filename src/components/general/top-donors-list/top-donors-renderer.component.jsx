import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';

import getPartOfArrayItems from '../../../helpers/get-part-of-array-items';
import { getDonationsListSelector } from '../../../store/reducers/donations.reducer';
import { getTopDonorsListSelector } from '../../../store/reducers/top-donors.reducer';
import TopDonorItemComponent from './top-donor.item.component';

const TopDonorsRendererComponent = ({ renderPartially }) => {
  // const classes = useStyles();

  const topDonorsList = useSelector(getTopDonorsListSelector);
  const donationsList = useSelector(getDonationsListSelector);

  if (donationsList.length > 0) {
    return null;
  }
  const items = renderPartially
    ? getPartOfArrayItems(topDonorsList)
    : topDonorsList;

  return (
    <div>
      {/* <div className={classes.root}>
      <div className={classes.topDonorsMoving}>*/}

      {/*{topDonorsList.map(donor => (*/}
      {items.map(donor => (
        <TopDonorItemComponent key={donor.id} donor={donor} />
      ))}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
TopDonorsRendererComponent.propTypes = {
  renderPartially: PropTypes.bool,
};
TopDonorsRendererComponent.defaultProps = {
  renderPartially: false,
};

export default TopDonorsRendererComponent;
