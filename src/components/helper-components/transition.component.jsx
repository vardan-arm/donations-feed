import Zoom from '@material-ui/core/Zoom';
import React from 'react';

import { POPUP_TRANSITION_TIMEOUT } from '../../shared/constants';

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Zoom {...props} timeout={POPUP_TRANSITION_TIMEOUT} ref={ref} />;
});

export default Transition;
