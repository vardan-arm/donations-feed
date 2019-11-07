import React, { useContext } from "react";
import { DonationsListContext } from "./list-wrapper.component";
import ListRendererComponent from "./list-renderer";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    overflow: "none"
  }
});

const DonationsComponent = () => {
  const classes = useStyles();

  const donationsList = useContext(DonationsListContext);

  return (
    <div>
      <ListRendererComponent
        className={classes.root}
        itemsList={donationsList}
      />
    </div>
  );
};

export default DonationsComponent;
