import React from 'react';

import DonationsRendererComponent from '../helper-components/donations-renderer-component';
import TopDonorsRendererComponent from './top-donors-list/top-donors-renderer.component';

const ListRendererComponent = () => {
  return (
    <>
      <DonationsRendererComponent />
      <TopDonorsRendererComponent />
    </>
  );
};

export default ListRendererComponent;
