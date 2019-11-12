import '../../styles/custom-styles.css';

import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useContext } from 'react';

import DonationsComponent from './donations-list/donations.component';
import { DonationsListContext } from './main-wrapper.component';
import TopDonorsComponent from './top-donors.component';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 'calc(100vh - 55px)',
    overflow: 'hidden',
  },
  wrapperWithMovingContents: {
    position: 'absolute',
    left: 0,
    top: 0,
    animation: 'mover 5s infinite linear',
  },
  '@keyframes mover': {
    '0%': {
      top: 0,
    },
    '100%': {
      top: '-200%',
    },
  },
});

const ListWrapperComponent = () => {
  const classes = useStyles();
  const { isScrolling } = useContext(DonationsListContext);

  return (
    <div className={classes.root}>
      {/*<div className="wrapper-with-moving-contents" id="list-wrapper-component">*/}
      {/*<div className="wrapper-with-moving-contents">*/}
      {/*<div
        id="list-wrapper-component"
        className={isScrolling ? 'wrapper-with-moving-contents' : ''}
      >*/}
      <div
        id="list-wrapper-component"
        className={isScrolling ? classes.wrapperWithMovingContents : ''}
      >
        <DonationsComponent />
        <TopDonorsComponent />
      </div>
    </div>
  );
};

export default ListWrapperComponent;
