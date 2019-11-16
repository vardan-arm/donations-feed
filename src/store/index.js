import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import thunk from 'redux-thunk';

import donationsReducer from './reducers/donations.reducer';
import metaReducer from './reducers/meta.reducer';
import scrollReducer from './reducers/scroll.reducer';
import topDonorsReducer from './reducers/top-donors.reducer';

export const store = configureStore({
  reducer: {
    donations: donationsReducer,
    topDonors: topDonorsReducer,
    scroll: scrollReducer,
    meta: metaReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
  devTools: true,
});
