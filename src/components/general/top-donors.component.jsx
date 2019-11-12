import React, { useContext } from 'react';

import { DonationsListContext } from './main-wrapper.component';

const TopDonorsComponent = () => {
  // const donationsList = useContext(DonationsListContext);
  const { donationsList } = useContext(DonationsListContext);

  if (donationsList.length > 0) {
    return null;
  }

  return <div>Top Donors list here...</div>;
};

export default TopDonorsComponent;
