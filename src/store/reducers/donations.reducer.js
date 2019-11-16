import { createReducer, createSelector } from 'redux-starter-kit';

import {
  addNewDonationAction,
  setIsDonationShown,
  setIsTempDonationsContainerVisible,
  setNewDonationPopupDuration,
} from '../actions/donations.actions';

const initialState = {
  data: [],
  isTempDonationsContainerVisible: false,
  // newDonationPopupDuration: 500, // milliseconds
  newDonationPopupDuration: 3000, // milliseconds
  totalSumPopupDuration: 1000, // milliseconds
};

const donationsReducer = createReducer(initialState, {
  [addNewDonationAction]: (state, action) => ({
    ...state,
    data: [
      ...state.data,
      {
        ...action.payload,
        isShown: false, // this flag is to note whether the donation was already shown in popup
      },
    ],
  }),
  [setIsTempDonationsContainerVisible]: (state, action) => ({
    ...state,
    isTempDonationsContainerVisible: action.payload,
  }),
  [setNewDonationPopupDuration]: (state, action) => ({
    ...state,
    newDonationPopupDuration: action.payload * 1000, // convert seconds to milliseconds
  }),
  [setIsDonationShown]: (state, action) => {
    const donationIndexToUpdate = state.data.findIndex(
      donation => donation.id === action.payload,
    );
    return {
      ...state,
      data: [
        ...state.data.slice(0, donationIndexToUpdate),
        { ...state.data[donationIndexToUpdate], isShown: true },
        ...state.data.slice(donationIndexToUpdate + 1),
      ],
    };
  },
});

export default donationsReducer;

export const getDonationsListSelector = state => state.donations.data;
export const getDonationsThatAreNotYetShown = createSelector(
  getDonationsListSelector,
  donations => donations.filter(donation => !donation.isShown),
);
export const getIsTempDonationsContainerVisibleSelector = state =>
  state.donations.isTempDonationsContainerVisible;
export const getNewDonationPopupDurationSelector = state =>
  state.donations.newDonationPopupDuration;
