import { createAction } from 'redux-starter-kit';

export const addNewDonationAction = createAction('donations/onAddNew');
export const setIsTempDonationsContainerVisible = createAction(
  'donations/onSetIsTempDonationsContainerVisible',
);
export const setNewDonationPopupDuration = createAction(
  'donations/onSetNewDonationPopupDuration',
);
export const setTotalSumPopupDuration = createAction(
  'donations/onSetTotalSumPopupDuration',
);
export const setIsDonationShown = createAction('donations/setIsShown');
export const setTotalDonationsAction = createAction(
  'donations/setTotalDonations',
);
export const setIsTotalDonationsPopupVisibleAction = createAction(
  'donations/setIsTotalDonationsPopupVisible',
);
