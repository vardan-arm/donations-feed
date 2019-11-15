import React from 'react';

import DonationItemComponent from '../general/donations-list/donation-item.component';

const DonationsRendererComponent = ({ donationsList }) => {
  return donationsList.map((item, index) => (
    <DonationItemComponent key={item.id} item={item} index={index} />
  ));
};

export default DonationsRendererComponent;
