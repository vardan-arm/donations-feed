import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import formatDonationAmount from '../../helpers/format-donation-amount';
import { POPUP_TRANSITION_TIMEOUT } from '../../shared/constants';
import { donationAmountStyle } from '../../shared/styles';
import richManImage from '../../static/rich-man.svg';
import { setIsDonationShown } from '../../store/actions/donations.actions';
import {
  getDonationsThatAreNotYetShown,
  getNewDonationPopupDurationSelector,
} from '../../store/reducers/donations.reducer';
import Transition from '../helper-components/transition.component';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    // minWidth: 800
  },
  newDonationTitle: {
    paddingBottom: theme.spacing(2),
  },
  donorName: {
    fontSize: 28,
    margin: theme.spacing(2, 3),
  },
  description: {
    fontSize: 20,
    marginBottom: theme.spacing(3),
  },
  donationAmount: {
    ...donationAmountStyle,
    marginBottom: theme.spacing(3),
  },
  donorLogo: {
    backgroundImage: `url(${richManImage})`,
    marginRight: theme.spacing(2),
    width: 48,
    height: 48,
  },
}));

// eslint-disable-next-line max-lines-per-function
const DonationPopupComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleClose = () => {
    setIsVisible(false);
  };

  const newDonationPopupDuration = useSelector(
    getNewDonationPopupDurationSelector,
  );
  // Get all the donations that are not shown in popup yet (in case there were several donations added very quickly).
  // Then get them one by one and show in popup.
  const notShownDonations = useSelector(getDonationsThatAreNotYetShown);
  const firstNotShownDonationItem = notShownDonations[0];

  // Show/hide popup
  const showPopupTimeoutId = useRef();
  const hidePopupTimeoutId = useRef();
  const dispatchTimeoutId = useRef();

  useEffect(() => {
    if (firstNotShownDonationItem && !isVisible) {
      showPopupTimeoutId.current = setTimeout(() => {
        setIsVisible(true);

        hidePopupTimeoutId.current = setTimeout(() => {
          handleClose();

          // Dispatch to update `isShown`
          // Using setTimeout here again, otherwise, when closing, the next (if any) donation's content becomes visible...
          dispatchTimeoutId.current = setTimeout(() => {
            dispatch(setIsDonationShown(firstNotShownDonationItem.id));
          }, 200);
        }, newDonationPopupDuration);
      }, POPUP_TRANSITION_TIMEOUT + 500); // give a time to complete the previous transition (which closes popup) and then open the next popup
    }

    return () => {
      clearTimeout(showPopupTimeoutId.current);
      clearTimeout(hidePopupTimeoutId.current);
      clearTimeout(dispatchTimeoutId.current);
    };
  }, [
    firstNotShownDonationItem,
    newDonationPopupDuration,
    isVisible,
    dispatch,
  ]);

  return (
    <>
      {firstNotShownDonationItem && (
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
              <Grid item component="div" className={classes.newDonationTitle}>
                <Typography variant="h3">New Donation!</Typography>
              </Grid>

              <Grid item component="div">
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  component="div"
                >
                  <Grid item component="div">
                    <div className={classes.donorLogo} />
                  </Grid>
                  <Grid item component="div">
                    <div className={classes.donorName}>
                      {firstNotShownDonationItem.title}
                    </div>
                    <div className={classes.description}>
                      {firstNotShownDonationItem.description}
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item component="div">
                <div className={classes.donationAmount}>
                  {formatDonationAmount({
                    amount: firstNotShownDonationItem.amount,
                    currency: firstNotShownDonationItem.currency,
                  })}
                </div>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default DonationPopupComponent;
