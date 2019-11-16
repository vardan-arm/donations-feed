import { createAction } from 'redux-starter-kit';

export const addNewDonationAction = createAction('donations/onAddNew');
export const setIsTempDonationsContainerVisible = createAction(
  'donations/onSetIsTempDonationsContainerVisible',
);
export const setNewDonationPopupDuration = createAction(
  'donations/onSetNewDonationPopupDuration',
);
export const setIsDonationShown = createAction('donations/setIsShown');
