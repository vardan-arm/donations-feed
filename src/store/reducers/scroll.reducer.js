import { createReducer } from 'redux-starter-kit';

import {
  setIsScrollingAction,
  setPointWhereScrollingStoppedAction,
  setScrollHasStartedAtLeastOnce,
} from '../actions/scroll.actions';

const initialState = {
  isScrolling: false,
  scrollHasStartedAtLeastOnce: false,
  stoppingPoint: null,
};

const scrollReducer = createReducer(initialState, {
  [setIsScrollingAction]: (state, action) => ({
    ...state,
    isScrolling: action.payload,
    scrollHasStartedAtLeastOnce: true,
  }),
  [setScrollHasStartedAtLeastOnce]: (state, action) => ({
    ...state,
    scrollHasStartedAtLeastOnce: action.payload,
  }),
  [setPointWhereScrollingStoppedAction]: (state, action) => ({
    ...state,
    stoppingPoint: action.payload,
  }),
});

export default scrollReducer;

/*export const x = state => {
  console.log({ state });
  return state.scroll.isScrolling;
};*/
export const getIsScrollingSelector = state => state.scroll.isScrolling;
export const getScrollHasStartedAtLeastOnce = state =>
  state.scroll.scrollHasStartedAtLeastOnce;
export const getScrollStoppingPointSelector = state =>
  state.scroll.stoppingPoint;
