import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setIsScrollingAction,
  setPointWhereScrollingStoppedAction,
} from '../../../store/actions/scroll.actions';
import { getIsTempDonationsContainerVisibleSelector } from '../../../store/reducers/donations.reducer';
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
    left: 1, // setting 1 (instead of 0) won't hide the contents' left borders
    top: props => props.topPosition || 0,
    width: '100%',
  },
  moving: {
    animation: '$mover 1500s infinite linear',
  },
  '@keyframes mover': {
    '0%': () => ({ top: 0 }), // Using arrow function here, otherwise, after restarting scroll, the container jumps to its very initial position
    '100%': {
      // Some big number to have kind of infinite motion.
      // The motion will be restarted when SeparatorComponent reaches to the screen's top edge.
      // So that, the component's `top` will never reach to the value below.
      top: '-100000px',
    },
  },
});

// eslint-disable-next-line max-lines-per-function
const DonationsComponent = props => {
  const classes = useStyles(props);

  const dispatch = useDispatch();
  const isScrolling = useSelector(getIsScrollingSelector);
  const componentMover = useCallback(() => {
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
        // Temporary component has reached to screen't top edge - restart the animation
        dispatch(setIsScrollingAction(false));
        dispatch(setPointWhereScrollingStoppedAction(0));

        // Start the animation on the next tick, otherwise the UI becomes distorted for a while
        setTimeout(() => {
          dispatch(setIsScrollingAction(true));
        });
      }
    }
  }, [dispatch, isScrolling]);

  useEffect(() => {
    requestAnimationFrame(componentMover);
  }, [componentMover, isScrolling]);

  const isTempDonationsContainerVisible = useSelector(
    getIsTempDonationsContainerVisibleSelector,
  );

  return (
    <div
      id="donations-component"
      className={`${classes.wrapperWithMovingContents} ${
        isScrolling ? classes.moving : ''
      }`}
    >
      <div style={{ paddingBottom: 10 }}>
        {/*<div style={{ border: '1px solid blue' }}>*/}
        <ListRendererComponent className={classes.root} />
      </div>
      {isTempDonationsContainerVisible && (
        <>
          <SeparatorComponent />
          <DonationsTemporaryComponent />
        </>
      )}
    </div>
  );
};

export default DonationsComponent;
