import { createReducer } from 'redux-starter-kit';

import { setTopDonorsAction } from '../actions/top-donors.action';

const initialState = {
  data: [],
};

const topDonorsReducer = createReducer(initialState, {
  [setTopDonorsAction]: (state, action) => ({
    ...state,
    data: [...action.payload],
  }),
});

export default topDonorsReducer;

export const getTopDonorsListSelector = state => state.topDonors.data;
