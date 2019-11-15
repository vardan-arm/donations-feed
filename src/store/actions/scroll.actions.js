import { createAction } from 'redux-starter-kit';

export const setIsScrollingAction = createAction('scroll/onSetIsScrolling');
export const setScrollPaPointWhereScrollingStoppedAction = createAction(
  'scroll/onSetPointWhereStopped',
);
