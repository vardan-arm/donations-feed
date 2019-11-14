import { createReducer } from 'redux-starter-kit';

import { addNewDonationAction } from '../actions/donations.actions';

const initialState = {
  data: [],
};

const donationsReducer = createReducer(initialState, {
  // [setDonationsAction]: (state, action) => [...state, ...action.payload],
  [addNewDonationAction]: (state, action) => ({
    ...state,
    data: [...state.data, action.payload],
  }),
});

export default donationsReducer;

export const getDonationsListSelector = state => state.donations.data;
