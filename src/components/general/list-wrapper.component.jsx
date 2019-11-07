// TODO: get real data from backend
import { dummyTimeout } from "../../helpers/dummy-timeout";
import DonationsComponent from "./donations.component";
import TopDonorsComponent from "./top-donors.component";
import React, { createContext, useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";

export const DonationsListContext = createContext([]);

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 40px)",
    overflow: "hidden"
  }
});

const ListWrapperComponent = () => {
  const classes = useStyles();

  const [donationsList, setDonationsList] = useState([]);

  useEffect(() => {
    dummyTimeout(1000).then(() => {
      setDonationsList([
        { id: 1, title: "donator 1", amount: "1500", currency: "$" },
        { id: 2, title: "donator 2", amount: "800", currency: "$" },
        { id: 3, title: "donator 3", amount: "400000", currency: "AMD" },
        { id: 4, title: "donator 4", amount: "1500", currency: "$" },
        { id: 5, title: "donator 5", amount: "800", currency: "$" },
        { id: 6, title: "donator 6", amount: "400000", currency: "AMD" },
        { id: 7, title: "donator 7", amount: "1500", currency: "$" },
        { id: 8, title: "donator 8", amount: "800", currency: "$" },
        { id: 9, title: "donator 9", amount: "400000", currency: "AMD" },
        { id: 10, title: "donator 10", amount: "1500", currency: "$" },
        { id: 11, title: "donator 11", amount: "800", currency: "$" },
        { id: 12, title: "donator 12", amount: "400000", currency: "AMD" },
        { id: 13, title: "donator 13", amount: "1500", currency: "$" },
        { id: 14, title: "donator 14", amount: "800", currency: "$" },
        { id: 15, title: "donator 15", amount: "400000", currency: "AMD" },
        { id: 16, title: "donator 16", amount: "1500", currency: "$" },
        { id: 17, title: "donator 17", amount: "800", currency: "$" },
        { id: 18, title: "donator 18", amount: "400000", currency: "AMD" },
        { id: 19, title: "donator 19", amount: "1500", currency: "$" },
        { id: 20, title: "donator 20", amount: "800", currency: "$" },
        { id: 21, title: "donator 21", amount: "400000", currency: "AMD" },
        { id: 22, title: "donator 22", amount: "1500", currency: "$" },
        { id: 23, title: "donator 23", amount: "800", currency: "$" },
        { id: 24, title: "donator 24", amount: "400000", currency: "AMD" }
      ]);
    });
  }, []);

  return (
    <Container className={classes.root}>
      <DonationsListContext.Provider value={donationsList}>
        {donationsList.length > 0 ? (
          <DonationsComponent />
        ) : (
          <TopDonorsComponent />
        )}
      </DonationsListContext.Provider>
    </Container>
  );
};

export default ListWrapperComponent;
