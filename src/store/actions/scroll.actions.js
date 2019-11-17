import { createAction } from 'redux-starter-kit';

export const setIsScrollingAction = createAction('scroll/onSetIsScrolling');
export const setScrollHasStartedAtLeastOnce = createAction(
  'scroll/setScrollHasStartedAtLeastOnce',
);
export const setPointWhereScrollingStoppedAction = createAction(
  'scroll/onSetPointWhereStopped',
);
