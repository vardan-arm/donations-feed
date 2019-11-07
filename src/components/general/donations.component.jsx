import makeStyles from '@material-ui/core/styles/makeStyles';
// import React, { useContext } from 'react';
import React from 'react';

import ListRendererComponent from './list-renderer';
// import { DonationsListContext } from './list-wrapper.component';

const useStyles = makeStyles({
  root: {
    overflow: 'none',
  },
});

const DonationsComponent = () => {
  const classes = useStyles();

  // const donationsList = useContext(DonationsListContext);
  // const donationsList = [];

  return (
    <div>
      <ListRendererComponent
        className={classes.root}
        // itemsList={donationsList}
      />
    </div>
  );
};

export default DonationsComponent;
