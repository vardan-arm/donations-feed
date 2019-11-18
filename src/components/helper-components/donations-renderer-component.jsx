import React from 'react';
import { useSelector } from 'react-redux';

import getPartOfArrayItems from '../../helpers/get-part-of-array-items';
import { getDonationsListSelector } from '../../store/reducers/donations.reducer';
import DonationItemComponent from '../general/donations-list/donation-item.component';

const DonationsRendererComponent = ({ renderPartially }) => {
  const donationsList = useSelector(getDonationsListSelector);
  const items = renderPartially
    ? getPartOfArrayItems(donationsList)
    : donationsList;

  // return donationsList.map((item, index) => (
  return items.map((item, index) => (
    <DonationItemComponent key={item.id} item={item} index={index} />
  ));
};

export default DonationsRendererComponent;
