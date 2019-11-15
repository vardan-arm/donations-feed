import { createReducer } from 'redux-starter-kit';

import { setDonationItemComponentHeight } from '../actions/meta.actions';

const initialState = {
  donationRecordComponentHeight: 0,
};

const metaReducer = createReducer(initialState, {
  [setDonationItemComponentHeight]: (state, action) => ({
    ...state,
    donationRecordComponentHeight: action.payload,
  }),
});

export default metaReducer;
