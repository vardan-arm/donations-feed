// import * as history from 'history';
/*import {
  configureStore,
  getDefaultMiddleware,
  // createReduxHistoryContext,
  // reachify,
} from 'redux-first-history';*/
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import thunk from 'redux-thunk';

import donationsReducer from './reducers/donations.reducer';
import scrollReducer from './reducers/scroll.reducer';

// const { createBrowserHistory } = history;

// const { createReduxHistory, routerReducer } = createReduxHistoryContext({
//   history: createHistory,
// });

export const store = configureStore({
  reducer: {
    donations: donationsReducer,
    scroll: scrollReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
  devTools: true,
  // router: routerReducer,
});

// const stateHistory = createReduxHistory(store);
// export const reachHistory = reachify(stateHistory);
