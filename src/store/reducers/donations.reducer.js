import { createReducer } from 'redux-starter-kit';

import {
  addNewDonationAction,
  setIsTempDonationsContainerVisible,
} from '../actions/donations.actions';

const initialState = {
  data: [],
  isTempDonationsContainerVisible: false,
};

const donationsReducer = createReducer(initialState, {
  // [setDonationsAction]: (state, action) => [...state, ...action.payload],
  [addNewDonationAction]: (state, action) => ({
    ...state,
    data: [...state.data, action.payload],
  }),
  [setIsTempDonationsContainerVisible]: (state, action) => ({
    ...state,
    isTempDonationsContainerVisible: action.payload,
  }),
});

export default donationsReducer;

export const getDonationsListSelector = state => state.donations.data;
export const getIsTempDonationsContainerVisibleSelector = state =>
  state.donations.isTempDonationsContainerVisible;
