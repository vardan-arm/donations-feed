import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { node } from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

import dummyTimeout from '../../helpers/dummy-timeout';

export const DonationsListContext = createContext([]);

const MainWrapperComponent = ({ children }) => {
  const [donationsList, setDonationsList] = useState([]);

  useEffect(() => {
    dummyTimeout(1000).then(() => {
      setDonationsList([
        { id: 1, title: 'donator 1', amount: '1500', currency: '$' },
        { id: 2, title: 'donator 2', amount: '800', currency: '$' },
        { id: 3, title: 'donator 3', amount: '400000', currency: 'AMD' },
        { id: 4, title: 'donator 4', amount: '1500', currency: '$' },
        { id: 5, title: 'donator 5', amount: '800', currency: '$' },
        { id: 6, title: 'donator 6', amount: '400000', currency: 'AMD' },
        { id: 7, title: 'donator 7', amount: '1500', currency: '$' },
        // { id: 8, title: 'donator 8', amount: '800', currency: '$' },
        // { id: 9, title: 'donator 9', amount: '400000', currency: 'AMD' },
        // { id: 10, title: 'donator 10', amount: '1500', currency: '$' },
        // { id: 11, title: 'donator 11', amount: '800', currency: '$' },
        // { id: 12, title: 'donator 12', amount: '400000', currency: 'AMD' },
        // { id: 13, title: 'donator 13', amount: '1500', currency: '$' },
        // { id: 14, title: 'donator 14', amount: '800', currency: '$' },
        // { id: 15, title: 'donator 15', amount: '400000', currency: 'AMD' },
        // { id: 16, title: 'donator 16', amount: '1500', currency: '$' },
        // { id: 17, title: 'donator 17', amount: '800', currency: '$' },
        // { id: 18, title: 'donator 18', amount: '400000', currency: 'AMD' },
        // { id: 19, title: 'donator 19', amount: '1500', currency: '$' },
        // { id: 20, title: 'donator 20', amount: '800', currency: '$' },
        // { id: 21, title: 'donator 21', amount: '400000', currency: 'AMD' },
        // { id: 22, title: 'donator 22', amount: '1500', currency: '$' },
        // { id: 23, title: 'donator 23', amount: '800', currency: '$' },
        // { id: 24, title: 'donator 24', amount: '400000', currency: 'AMD' },
      ]);
    });
  }, []);

  const addData = () => {
    // data.push();
    // console.log('here');
    const nextItemId = donationsList.length + 1;
    setDonationsList([
      ...donationsList,
      {
        id: nextItemId,
        title: `donator ${nextItemId}`,
        amount: (Math.random() * 1000).toFixed(),
        currency: '$',
      },
    ]);
    // console.log({ donationsList });
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        <div>Left part (logos)</div>
        <Button variant="contained" onClick={addData}>
          Add new records
        </Button>
      </Grid>
      <Grid item xs={6}>
        <DonationsListContext.Provider value={donationsList}>
          {children}
        </DonationsListContext.Provider>
      </Grid>
    </Grid>
  );
};

MainWrapperComponent.propTypes = {
  children: node,
};
MainWrapperComponent.defaultProps = {
  children: null,
};

export default MainWrapperComponent;
