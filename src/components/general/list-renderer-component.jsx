import React from 'react';
import { useSelector } from 'react-redux';

import { getDonationsListSelector } from '../../store/reducers/donations.reducer';
import DonationsRendererComponent from '../helper-components/donations-renderer-component';

const ListRendererComponent = () => {
  const donationsList = useSelector(getDonationsListSelector);

  return <DonationsRendererComponent donationsList={donationsList} />;
};

export default ListRendererComponent;
