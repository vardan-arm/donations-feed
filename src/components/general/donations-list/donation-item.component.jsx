import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import richManImage from '../../../static/rich-man.svg';
import { setDonationItemComponentHeight } from '../../../store/actions/meta.actions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(3, 0),
  },
  donationNumber: {
    fontSize: 20,
  },
  donorTitle: {
    fontSize: 24,
    paddingBottom: 8,
  },
  donationAmount: {
    fontSize: 20,
    border: '1px solid orange',
    borderRadius: 16,
    // width: '150px',
    minWidth: 'fit-content',
    padding: '8px 24px',
    backgroundColor: 'darkcyan',
    color: 'white',
  },
  description: {
    paddingLeft: 8,
    fontSize: '18px',
    lineHeight: '18px',
  },
}));

const DonationItemComponent = ({ item, index }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const donationItemRef = useRef(null);

  const { title, amount, currency, description } = item;

  useEffect(() => {
    const donationItemComponent = donationItemRef.current;
    dispatch(
      setDonationItemComponentHeight(
        donationItemComponent.getBoundingClientRect().height,
      ),
    );
  }, [dispatch, donationItemRef]);

  return (
    <Paper className={classes.root} ref={donationItemRef}>
      <Grid container component="div">
        <Grid item xs={1} component="div">
          <div className={classes.donationNumber}>{`#${index + 1}`}</div>
        </Grid>
        <Grid item xs={9} component="div">
          <div className={classes.donorTitle}>{title}</div>
          <Grid container component="div">
            <Grid item xs={4} component="div">
              <div className={classes.donationAmount}>{`${currency} ${(
                amount - 0
              ).toLocaleString('en-US')}`}</div>
            </Grid>
            <Grid item xs={8} component="div">
              <div className={classes.description}>{description}</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} component="div">
          <div
            style={{
              backgroundImage: `url(${richManImage})`,
              width: 48,
              height: 48,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

DonationItemComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    description: PropTypes.string,
  }),
  index: PropTypes.number,
};
DonationItemComponent.defaultProps = {
  index: 0,
  item: {
    id: 0,
    title: '',
    amount: '0',
    currency: '',
    description: '',
  },
};

export default DonationItemComponent;
