import React from 'react';
import { useSelector } from 'react-redux';

import { getDonationsListSelector } from '../../../store/reducers/donations.reducer';
import DonationsRendererComponent from '../../helper-components/donations-renderer-component';

const DonationsTemporaryComponent = () => {
  const donationsList = useSelector(getDonationsListSelector);

  // Copy up to 20 records to this component.
  // This will ensure that this component will have enough records to show until DonationsComponent starts its animation again,
  // so there is no any vertical empty space despite the screen size.
  return (
    <div
      id="temp-donations-component"
      style={{
        paddingTop: 10,
        border: '1px solid red',
      }}
    >
      <DonationsRendererComponent donationsList={donationsList.slice(0, 20)} />
    </div>
  );
};

export default DonationsTemporaryComponent;
