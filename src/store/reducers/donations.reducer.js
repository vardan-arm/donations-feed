import { createReducer, createSelector } from 'redux-starter-kit';

import {
  addNewDonationAction,
  setIsDonationShown,
  setIsTempDonationsContainerVisible,
  setIsTotalDonationsPopupVisibleAction,
  setNewDonationPopupDuration,
  setTotalDonationsAction,
  setTotalSumPopupDuration,
} from '../actions/donations.actions';

const initialState = {
  data: [],
  isTempDonationsContainerVisible: false,
  newDonationPopupDuration: 1000, // milliseconds
  totalSumPopupDuration: 1000, // milliseconds
  isTotalDonationsPopupVisible: false,
  totalDonations: null,
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
    newDonationPopupDuration: action.payload, // convert seconds to milliseconds
  }),
  [setTotalSumPopupDuration]: (state, action) => ({
    ...state,
    totalSumPopupDuration: action.payload,
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
  [setIsTotalDonationsPopupVisibleAction]: (state, action) => ({
    ...state,
    isTotalDonationsPopupVisible: action.payload,
  }),
  [setTotalDonationsAction]: (state, action) => ({
    ...state,
    totalDonations: action.payload,
  }),
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
export const getTotalSumPopupDuration = state =>
  state.donations.totalSumPopupDuration;
export const getIsTotalDonationsPopupVisible = state =>
  state.donations.isTotalDonationsPopupVisible;
export const getTotalDonationsSelector = state =>
  state.donations.totalDonations;
