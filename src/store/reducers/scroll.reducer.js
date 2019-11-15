import { createReducer } from 'redux-starter-kit';

import {
  setIsScrollingAction,
  setScrollPaPointWhereScrollingStoppedAction,
} from '../actions/scroll.actions';

const initialState = {
  isScrolling: false,
  stoppingPoint: null,
};

const scrollReducer = createReducer(initialState, {
  [setIsScrollingAction]: (state, action) => ({
    ...state,
    isScrolling: action.payload,
  }),
  [setScrollPaPointWhereScrollingStoppedAction]: (state, action) => ({
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
export const getScrollStoppingPointSelector = state =>
  state.scroll.stoppingPoint;
