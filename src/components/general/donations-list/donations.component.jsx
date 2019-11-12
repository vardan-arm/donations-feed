import makeStyles from '@material-ui/core/styles/makeStyles';
// import React, { useContext } from 'react';
import React from 'react';

import ListRendererComponent from '../list-renderer-component';
import DonationsTemporaryComponent from './donations-temporary-component';
import SeparatorComponent from './separator-component';
// import { DonationsListContext } from './list-wrapper.component';

const useStyles = makeStyles({
  root: {
    overflow: 'none',
  },
});

// TODO: move this parameter to Redux (or other place)
// window.isScrolling = false;

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
      {window.isScrolling && (
        <>
          <SeparatorComponent />
          <DonationsTemporaryComponent />
        </>
      )}
    </div>
  );
};

export default DonationsComponent;
