import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getIsScrollingSelector } from '../../../store/reducers/scroll.reducer';
import ListRendererComponent from '../list-renderer-component';
import DonationsTemporaryComponent from './donations-temporary-component';
import SeparatorComponent from './separator-component';

const useStyles = makeStyles({
  root: {
    overflow: 'none',
  },
  wrapperWithMovingContents: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  moving: {
    animation: '$mover 5s infinite linear',
  },
  '@keyframes mover': {
    '0%': {
      top: props => props.topPosition || 0, // tODO: continue here...
    },
    '100%': {
      // Some big number to have kind of infinite motion; the motion will be stopped when SeparatorComponent reaches to the screen's top edge
      top: '-1000px',
    },
  },
});

const DonationsComponent = props => {
  const classes = useStyles(props);
  // console.log('props', props);

  // const { isScrolling } = useContext(DonationsListContext);
  const isScrolling = useSelector(getIsScrollingSelector);

  // const componentMover = useCallback(timestamp => {
  const componentMover = useCallback(() => {
    // console.log('timestamp', timestamp);
    // const containerElement = document.getElementById('list-wrapper-component');

    // setIsScrolling(true);

    // TODO: not so "Reacty" approach, find a better way in future
    // Add required class name to donations container to start motion
    // containerElement.classList.add('moving');

    // console.log('is scorlling?', isScrolling);
    if (isScrolling) {
      requestAnimationFrame(componentMover);
    }

    // TODO: find a better approach instead of getting component by ID
    const temporaryDonationsComponent = document.getElementById(
      'temp-donations-component',
    );
    if (temporaryDonationsComponent) {
      const temporaryDonationsComponentTopPosition = temporaryDonationsComponent.getBoundingClientRect()
        .top;

      if (temporaryDonationsComponentTopPosition <= 0) {
        // console.log('STOP !!!!!!!!!!!!!');
      }
    }
  }, [isScrolling]);

  useEffect(() => {
    requestAnimationFrame(componentMover);
  }, [componentMover, isScrolling]);

  // const donationsList = useContext(DonationsListContext);
  // const donationsList = [];

  return (
    <div
      id="list-wrapper-component"
      style={{ border: '1px solid' }}
      className={`${classes.wrapperWithMovingContents} ${
        isScrolling ? classes.moving : ''
      }`}
    >
      {/*<div>*/}
      <ListRendererComponent
        className={classes.root}
        // itemsList={donationsList}
      />
      {isScrolling && (
        <>
          <SeparatorComponent />
          <DonationsTemporaryComponent />
        </>
      )}
    </div>
  );
};

export default DonationsComponent;
