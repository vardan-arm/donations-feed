// TODO: get real data from backend
import {dummyTimeout} from "../../helpers/dummy-timeout";
import DonationsComponent from "../donations.component";
import TopDonorsComponent from "../top-donors.component";
import React, {useEffect, useState} from "react";


const ListWrapperComponent = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    dummyTimeout(1000)
      .then(() => {
          console.log('here');
          setData({
            "donations": [
              {"id": 1, "title": "donator 1", "amount": "1500", "currency": "$"},
              {"id": 2, "title": "donator 2", "amount": "800", "currency": "$"},
              {"id": 3, "title": "donator 3", "amount": "400000", "currency": "AMD"}
            ]
          });
        }
      );
  }, []);

  return (
    <div>
      {Object.keys(data).length > 0 ? <DonationsComponent/> : <TopDonorsComponent/>}
    </div>
  );
};

export default ListWrapperComponent;
