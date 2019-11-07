import { Router } from '@reach/router';
import React from 'react';

import AdminPage from '../pages/admin.page';
import HomePage from '../pages/home.page';

const AppComponent = () => {
  return (
    <Router>
      <HomePage path="/" />
      <AdminPage path="admin" />
    </Router>
  );
};

export default AppComponent;
