import { Link } from '@reach/router';
// import axios from 'axios';
import React from 'react';

import DonationsComponent from '../components/general/donations.component';
import MainWrapperComponent from '../components/general/main-wrapper.component';
import TopDonorsComponent from '../components/general/top-donors.component';

// TODO: replace this with data from API call
// TODO: move this to another (helper) file
/*
axios.get('/donations')
// axios.get('http://localhost:3000/donations')
  .then(response => {
    console.log({response});
  })
  .catch(e => {
    console.log('An error has happened during API call', e);
  });
*/

/*
// TODO: get real data from backend
let data = [];
dummyTimeout(1000);

data = {
  "donations": [
    { "id": 1, "title": "donator 1", "amount": "1500", "currency": "$" },
    { "id": 2, "title": "donator 2", "amount": "800", "currency": "$" },
    { "id": 3, "title": "donator 3", "amount": "400000", "currency": "AMD" }
  ]
};
*/

const HomePage = () => {
  return (
    <div>
      <MainWrapperComponent>
        <DonationsComponent />
        <TopDonorsComponent />
      </MainWrapperComponent>
      <Link to="/admin">Admin</Link>
    </div>
  );
};

export default HomePage;
