import Paper from "@material-ui/core/Paper";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const ListRendererComponent = ({ itemsList }) => {
  const classes = useStyles();

  return itemsList.map(item => {
    return (
      <Paper key={item.id} className={classes.root}>
        <Typography variant="h6">{item.title}</Typography>
      </Paper>
    );
  });
};

export default ListRendererComponent;
