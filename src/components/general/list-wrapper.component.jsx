// import '../../styles/custom-styles.css';

import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { useSelector } from 'react-redux';

import { getScrollStoppingPointSelector } from '../../store/reducers/scroll.reducer';
import DonationsComponent from './donations-list/donations.component';
// import { DonationsListContext } from './main-wrapper.component';
import TopDonorsComponent from './top-donors.component';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 'calc(100vh - 55px)',
    overflow: 'hidden',
  },
});

const ListWrapperComponent = () => {
  const classes = useStyles();
  // const { isScrolling } = useContext(DonationsListContext);

  const scrollStoppingPoint = useSelector(getScrollStoppingPointSelector);

  return (
    <div className={classes.root}>
      {/*<div
        id="list-wrapper-component"
        style={{ border: '1px solid' }}
        className={isScrolling ? classes.wrapperWithMovingContents : ''}
      >*/}
      <div>
        <DonationsComponent topPosition={scrollStoppingPoint} />
        <TopDonorsComponent />
      </div>
    </div>
  );
};

export default ListWrapperComponent;
