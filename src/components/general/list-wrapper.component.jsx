import '../../styles/custom-styles.css';

import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';

import DonationsComponent from './donations.component';
import TopDonorsComponent from './top-donors.component';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 'calc(100vh - 55px)',
    overflow: 'hidden',
  },
  wrapperWithMovingContents: {
    // position: 'absolute',
    /*'-webkitAnimation': 'mover 1s infinite  alternate',
    animation: 'mover 1s infinite  alternate',*/
    /*'::@-webkit-keyframes mover': `
      {0% { transform: translateY(0); }
      100% { transform: translateY(-10px); }`,

    '::@keyframes mover': `
      {0% { transform: translateY(0); }
      100% { transform: translateY(-10px); }`,*/
    /*'@-webkit-keyframes mover': {
      '0%': {
        transform: 'translateY(0)',
      },
      '100%': {
        transform: 'translateY(-10px)',
      },
    },
    '@keyframes mover': {
      '0%': {
        transform: 'translateY(0)',
      },
      '100%': {
        transform: 'translateY(-10px)',
      },
    },*/
    /*'@-webkit-keyframes mover': `{
      '0%': {
        transform: 'translateY(0)',
      },
      '100%': {
        transform: 'translateY(-10px)',
      },
    }`,*/
    /*'::@keyframes mover': {
      '0%': {
        transform: 'translateY(0)',
      },
      '100%': {
        transform: 'translateY(-10px)',
      },
    },*/
  },
});

const ListWrapperComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="wrapper-with-moving-contents">
        <DonationsComponent />
        <TopDonorsComponent />
      </div>
    </div>
  );
};

export default ListWrapperComponent;
