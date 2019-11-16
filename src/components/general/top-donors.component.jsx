import React from 'react';
import { useSelector } from 'react-redux';

import { getDonationsListSelector } from '../../store/reducers/donations.reducer';

const TopDonorsComponent = () => {
  const donationsList = useSelector(getDonationsListSelector);

  if (donationsList.length > 0) {
    return null;
  }

  return <div>Top Donors list here...</div>;
};

export default TopDonorsComponent;
