import { Router } from "@reach/router"
import HomePage from "../pages/home.page";
import React from "react";
import AdminPage from "../pages/admin.page";

const AppComponent = () => {
  return (
    <Router>
      <HomePage path={'/'} />
      <AdminPage path={'/admin'} />
    </Router>
  );
};

export default AppComponent;
