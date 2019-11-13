import React, { useContext } from 'react';

import DonationsRendererComponent from '../../helper-components/donations-renderer-component';
import { DonationsListContext } from '../main-wrapper.component';

const DonationsTemporaryComponent = () => {
  const { donationsList } = useContext(DonationsListContext);

  /*useEffect(() => {
    // TOOD: find a better way not to get element by ID (refs ?)
    const containerElement = document.getElementById(
      'temp-donations-component',
    );
    const containerSizes = containerElement.getBoundingClientRect();
    console.log('here', containerSizes);
  });*/

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
      <DonationsRendererComponent donationsList={donationsList.slice(0, 20)} />
    </div>
  );
};

export default DonationsTemporaryComponent;
