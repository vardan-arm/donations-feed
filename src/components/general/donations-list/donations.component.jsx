import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setIsScrollingAction,
  setScrollPaPointWhereScrollingStoppedAction,
} from '../../../store/actions/scroll.actions';
import { getIsTempDonationsContainerVisibleSelector } from '../../../store/reducers/donations.reducer';
import { getIsScrollingSelector } from '../../../store/reducers/scroll.reducer';
import ListRendererComponent from '../list-renderer-component';
import DonationsTemporaryComponent from './donations-temporary-component';
import SeparatorComponent from './separator-component';

const useStyles = makeStyles(() => {
  // const x = window.topPosition;
  // console.log({ x });

  // const pointWhereScrollingStopped = useSelector(getScrollStoppingPointSelector);

  return {
    root: {
      overflow: 'none',
    },
    wrapperWithMovingContents: {
      position: 'absolute',
      left: 0,
      // left: props => props.topPosition,
      // top: 0,
      // top: 0,
      top: props => props.topPosition || 0,
    },
    moving: {
      // animation: '$mover 5s infinite linear',
      animation: '$mover 100s infinite linear', // TODO: make the speed to be pixels/ms, so that the speed will be the same despite records count
      // TODO (part 2): maybe { recordsCount * secondsToShowSingleRecord } ? e.g., donationsList.length * 2000 (2 seconds "for each record")
    },

    // '@keyframes mover': props =>  ({
    //   ...moverFn(props)
    // }),

    '@keyframes mover': {
      '0%': () => {
        // console.log(',,,,,', x, props.topPosition);
        // return { top: props.topPosition || 0 };
        // return { left: props.topPosition || 0 };
        // return { top: x || 0 };
        return { top: 0 };
      }, // tODO: continue here, read top position from props
      '100%': {
        // Some big number to have kind of infinite motion; the motion will be restarted when SeparatorComponent reaches to the screen's top edge
        // top: '-1000px',
        top: '-10000px',
      },
    },
  };
});

/////////////////////////////////////////////////////
//////////////// Styled components //////////////////
/////////////////////////////////////////////////////
/*const animation = (props) => {
  return keyframes`
    to {
      color: ${props.theme.error};
    }
  `
}*/

// eslint-disable-next-line max-lines-per-function
const DonationsComponent = props => {
  const classes = useStyles(props);

  const dispatch = useDispatch();

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
        // Temporary component has reached to screen't top edge - restart the animation
        dispatch(setIsScrollingAction(false));
        dispatch(setScrollPaPointWhereScrollingStoppedAction(0)); // TODO: fix hardcoding

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

  // const donationsList = useContext(DonationsListContext);
  // const donationsList = [];

  const isTempDonationsContainerVisible = useSelector(
    getIsTempDonationsContainerVisibleSelector,
  );

  return (
    <div
      id="list-wrapper-component"
      className={`${classes.wrapperWithMovingContents} ${
        isScrolling ? classes.moving : ''
      }`}
    >
      {/*<div>*/}
      <div style={{ border: '1px solid blue' }}>
        <ListRendererComponent
          className={classes.root}
          // itemsList={donationsList}
        />
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
