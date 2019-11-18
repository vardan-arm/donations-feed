import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import formatDonationAmount from '../../helpers/format-donation-amount';
import { donationAmountStyle } from '../../shared/styles';
import { setIsTotalDonationsPopupVisibleAction } from '../../store/actions/donations.actions';
import {
  getIsTotalDonationsPopupVisible,
  getTotalDonationsSelector,
  getTotalSumPopupDuration,
} from '../../store/reducers/donations.reducer';
import Transition from '../helper-components/transition.component';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    paddingBottom: theme.spacing(2),
  },
  donationsContainer: {
    ...donationAmountStyle,
    fontSize: 28,
    margin: theme.spacing(2, 3),
  },
  donationAmount: {
    padding: theme.spacing(1),
  },
}));

// eslint-disable-next-line max-lines-per-function
const TotalSumPopupComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClose = () => {
    setIsVisible(false);
  };

  const isTotalDonationsPopupVisible = useSelector(
    getIsTotalDonationsPopupVisible,
  );
  const donationsTotalAmount = useSelector(getTotalDonationsSelector);
  const totalSumPopupDuration = useSelector(getTotalSumPopupDuration);

  const showPopupTimeoutId = useRef();
  useEffect(() => {
    setIsVisible(isTotalDonationsPopupVisible);

    // Hide popup
    showPopupTimeoutId.current = setTimeout(() => {
      handleClose();
      dispatch(setIsTotalDonationsPopupVisibleAction(false));
    }, totalSumPopupDuration);

    return () => {
      clearTimeout(showPopupTimeoutId.current);
    };
  }, [dispatch, isTotalDonationsPopupVisible, totalSumPopupDuration]);

  return (
    <>
      {donationsTotalAmount && (
        <Dialog
          open={isVisible}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          fullWidth
          maxWidth="md"
          className={classes.root}
        >
          <DialogContent>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              component="div"
            >
              <Grid item component="div" className={classes.title}>
                <Typography variant="h3">TOTAL DONATIONS</Typography>
              </Grid>
              <Grid item component="div">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  component="div"
                >
                  <Grid
                    item
                    component="div"
                    className={classes.donationsContainer}
                  >
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      component="div"
                    >
                      {donationsTotalAmount.map((totalByCurrency, index) => {
                        const itemKey = index;

                        return (
                          <Grid
                            item
                            component="div"
                            key={itemKey}
                            className={classes.donationAmount}
                          >
                            {formatDonationAmount({
                              amount: totalByCurrency.amount,
                              currency: totalByCurrency.currency,
                            })}
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default TotalSumPopupComponent;
