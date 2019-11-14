import { createReducer } from 'redux-starter-kit';

import { setIsScrollingAction } from '../actions/scroll.actions';

const initialState = {
  isScrolling: false,
};

const scrollReducer = createReducer(initialState, {
  [setIsScrollingAction]: (state, action) => ({
    ...state,
    isScrolling: action.payload,
  }),
});

export default scrollReducer;

/*export const x = state => {
  console.log({ state });
  return state.scroll.isScrolling;
};*/
export const getIsScrollingSelector = state => state.scroll.isScrolling;
