import { createAction } from 'redux-starter-kit';

// export const setDonationsAction = createAction('donations/onSet');
export const addNewDonationAction = createAction('donations/onAddNew');
export const setIsTempDonationsContainerVisible = createAction(
  'donations/onSetIsTempDonationsContainerVisible',
);
