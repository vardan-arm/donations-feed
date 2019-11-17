import React from 'react';
import { useSelector } from 'react-redux';

import { getDonationsListSelector } from '../../../store/reducers/donations.reducer';
import {
  getIsScrollingSelector,
  getScrollHasStartedAtLeastOnce,
} from '../../../store/reducers/scroll.reducer';
import DonationsRendererComponent from '../../helper-components/donations-renderer-component';
import TopDonorsRendererComponent from '../top-donors-list/top-donors-renderer.component';

const DonationsTemporaryComponent = () => {
  const donationsList = useSelector(getDonationsListSelector);
  const isScrolling = useSelector(getIsScrollingSelector);

  const scrollHasStartedAtLeastOnce = useSelector(
    getScrollHasStartedAtLeastOnce,
  );
  const showComponent = isScrolling || scrollHasStartedAtLeastOnce;

  // Don't render if there is no scroll yet
  if (!showComponent) {
    return null;
  }

  // Copy up to 20 records to this component.
  // This will ensure that this component will have enough records to show until DonationsComponent starts its animation again,
  // so there is no any vertical empty space despite the screen size.
  return (
    <div
      id="temp-donations-component"
      style={{
        paddingTop: 10,
      }}
    >
      {donationsList.length > 0 ? (
        <DonationsRendererComponent renderPartially />
      ) : (
        <TopDonorsRendererComponent renderPartially />
      )}
    </div>
  );
};

export default DonationsTemporaryComponent;
