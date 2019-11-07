// TODO: get real data from backend
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { node } from 'prop-types';
import React, { useContext } from 'react';

import { DonationsListContext } from './main-wrapper.component';

const useStyles = makeStyles({
  root: {
    height: 'calc(100vh - 40px)',
    overflow: 'hidden',
  },
});

const ListWrapperComponent = ({ children }) => {
  const classes = useStyles();

  const donationsList = useContext(DonationsListContext);

  if (donationsList.length === 0) {
    return null;
  }

  return <Container className={classes.root}>{children}</Container>;
};

ListWrapperComponent.propTypes = {
  children: node,
};
ListWrapperComponent.defaultProps = {
  children: null,
};

export default ListWrapperComponent;
