import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import dummyTimeout from '../../helpers/dummy-timeout';
import {
  addNewDonationAction,
  setIsTempDonationsContainerVisible,
} from '../../store/actions/donations.actions';
import {
  setIsScrollingAction,
  setScrollPaPointWhereScrollingStoppedAction,
} from '../../store/actions/scroll.actions';
import { getDonationsListSelector } from '../../store/reducers/donations.reducer';
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

  useEffect(() => {
    dummyTimeout(1000).then(() => {
      const donations = [
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
        // { id: 4, title: 'donator 4', amount: '1500', currency: '$' },
        // { id: 5, title: 'donator 5', amount: '800', currency: '$' },
        // { id: 6, title: 'donator 6', amount: '400000', currency: 'AMD' },
        // { id: 7, title: 'donator 7', amount: '1500', currency: '$' },

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
      ];
      // TODO: this loop is only for development purposes and later it will be deleted, as in reality there will be no existing donations initially
      donations.forEach(donationItem =>
        dispatch(addNewDonationAction(donationItem)),
      );
    });
  }, [dispatch]);

  const donationsList = useSelector(getDonationsListSelector);

  const setScrollingState = useCallback(
    startScroll => {
      // TODO: find a better way not to get element by ID (ref ?)
      const containerElement = document.getElementById(
        'list-wrapper-component',
      );
      const containerSizes = containerElement.getBoundingClientRect();

      if (typeof startScroll === 'boolean') {
        dispatch(setIsScrollingAction(startScroll));

        // TODO: this is for testing purposes, remove later
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
    const nextItemId = (Math.random() * 1000).toFixed() - 0;

    dispatch(
      addNewDonationAction({
        id: nextItemId,
        title: `Donor ${nextItemId}`,
        amount: (Math.random() * 1000).toFixed(),
        currency: '$',
        description: '',
      }),
    );
  };

  // Donations list is used as a dependency in useEffect, where the scrolling setter function is called.
  // The useEffect will ensure that the newly added record is also taken into account
  useEffect(() => {
    setScrollingState();
  }, [donationsList, setScrollingState]);

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
      </Grid>
      <Grid item xs={6} component="div">
        <ListWrapperComponent />
      </Grid>
    </Grid>
  );
};

export default MainWrapperComponent;
