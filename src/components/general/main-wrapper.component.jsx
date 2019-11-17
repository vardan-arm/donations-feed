import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import dummyTimeout from '../../helpers/dummy-timeout';
import {
  addNewDonationAction,
  setIsTempDonationsContainerVisible,
  setNewDonationPopupDuration,
} from '../../store/actions/donations.actions';
import {
  setIsScrollingAction,
  setScrollHasStartedAtLeastOnce,
  setScrollPaPointWhereScrollingStoppedAction,
} from '../../store/actions/scroll.actions';
import { setTopDonorsAction } from '../../store/actions/top-donors.action';
import { getDonationsListSelector } from '../../store/reducers/donations.reducer';
import { getTopDonorsListSelector } from '../../store/reducers/top-donors.reducer';
import ListWrapperComponent from './list-wrapper.component';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff7e6',
  },
});

// eslint-disable-next-line max-lines-per-function
const MainWrapperComponent = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const donationsList = useSelector(getDonationsListSelector);
  const topDonorsList = useSelector(getTopDonorsListSelector);

  useEffect(() => {
    dummyTimeout(100).then(() => {
      const topDonors = [
        {
          id: 1,
          title: 'Very rich man',
        },
        {
          id: 2,
          title: 'Some big company',
        },
        {
          id: 3,
          title: 'Anonymous donor',
        },
        {
          id: 11,
          title: 'Not so very rich man',
        },
        {
          id: 12,
          title: 'Still anonymous donor, but another',
        },

        // this is added for testing scroll on top donors component, can be removed
        {
          id: 112,
          title: 'Still anonymous donor, but another',
        },
        {
          id: 212,
          title: 'Still anonymous donor, but another',
        },
        {
          id: 612,
          title: 'Still anonymous donor, but another',
        },
        {
          id: 312,
          title: 'Still anonymous donor, but another',
        },
        {
          id: 412,
          title: 'Still anonymous donor, but another',
        },
        {
          id: 512,
          title: 'Still anonymous donor, but another',
        },
      ];

      dispatch(setTopDonorsAction(topDonors));
    });
  }, [dispatch]);

  const setScrollingState = useCallback(
    startScroll => {
      // TODO: find a better way not to get element by ID (ref ?)
      const containerElement = document.getElementById('donations-component');
      const containerSizes = containerElement.getBoundingClientRect();

      if (typeof startScroll === 'boolean') {
        dispatch(setIsScrollingAction(startScroll));

        if (startScroll === false) {
          const containerTopPosition = containerSizes.top;

          dispatch(
            // setScrollPaPointWhereScrollingStoppedAction(containerTopPosition - 6), // TODO: ensure this hardcoded number is correct on different screens
            setScrollPaPointWhereScrollingStoppedAction(
              containerTopPosition - 8,
            ), // TODO: ensure this hardcoded number is correct on different screens
          );
        }
      } else {
        // Automatically start scrolling if the newly added records are not fully shown anymore
        const containerBottomPosition =
          containerSizes.top + containerSizes.height;

        if (containerBottomPosition > document.body.scrollHeight) {
          // TODO: in all places where we have more than one `dispatch` in components, use thunks
          dispatch(setIsScrollingAction(true));
          dispatch(setIsTempDonationsContainerVisible(true));
        }
      }
    },
    [dispatch],
  );

  const addData = () => {
    // TODO: get ID from backend
    const nextItemId = (Math.random() * 1000).toFixed() - 0;

    // If this is very first donation, stop the scroll (because if top donors list is large, it might have started scrolling)
    if (donationsList.length === 0) {
      setScrollingState(false);
      dispatch(setScrollHasStartedAtLeastOnce(null));
    }

    dispatch(
      addNewDonationAction({
        id: nextItemId,
        title: `Donor ${nextItemId}`,
        amount: (Math.random() * 1000).toFixed(),
        currency: '$',
        description: '',
      }),
    );

    // Set top position for the first donation to be on top
    dispatch(setScrollPaPointWhereScrollingStoppedAction(0));
  };

  useEffect(() => {
    dummyTimeout(3000).then(() => {
      /*const donations = [
        {
          id: 1,
          title: 'Donor 1',
          amount: '1500',
          currency: '$',
          description: 'Good luck, people!!!',
        },
        {
          id: 2,
          title: 'Anonymous',
          amount: '800000',
          currency: 'AMD',
          description: '',
        },
        {
          id: 3,
          title:
            'Donor 3 with very unusual long first name and even longer last name',
          amount: '400000',
          currency: 'AMD',
          description:
            'some long long long long long long long long long long long long long long long long long long long long description',
        },
      ];
      // TODO: this loop is only for development purposes and later it will be deleted, as in reality there will be no existing donations initially
       donations.forEach(donationItem =>
        dispatch(addNewDonationAction(donationItem)),
      );*/
      // TODO: this loop is only for development purposes and later it will be deleted, as in reality there will be no existing donations initially
      // donations.forEach(donationItem => addData());
    });
  }, [dispatch]);

  // Donations list is used as a dependency in useEffect, where the scrolling setter function is called.
  // The useEffect will ensure that the newly added record is also taken into account
  useEffect(() => {
    setScrollingState();
  }, [donationsList, topDonorsList, setScrollingState]);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      component="div"
      className={classes.root}
    >
      <Grid item xs={6} component="div">
        <div>Left part (logos)</div>
        <Button variant="contained" onClick={addData}>
          Add new record
        </Button>
        <br />

        <Button variant="contained" onClick={() => setScrollingState(true)}>
          Start scrolling
        </Button>
        <Button variant="contained" onClick={() => setScrollingState(false)}>
          Stop scrolling
        </Button>
        <br />

        <Button
          variant="contained"
          onClick={() => {
            dispatch(setNewDonationPopupDuration(5)); // TODO: remove this hardcoding when we get duration from admin pnael
          }}
        >
          Set new donation popup duration
        </Button>
      </Grid>
      <Grid item xs={6} component="div">
        <ListWrapperComponent />
      </Grid>
    </Grid>
  );
};

export default MainWrapperComponent;
