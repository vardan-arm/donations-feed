import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';
import AppComponent from './app.component';

const RootComponent = () => {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  );
};

export default RootComponent;
