import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    boxShadow: theme.shadows[2],
    borderRadius: 5,
    backgroundColor: "white",
    position: "relative",
  },
  chartName: {
    position: "absolute",
    top: 20,
    left: 50,
  },
}));

const ChartWrapper = ({ children, name }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {name && <span className={classes.chartName}>{name}</span>}
        {children}
      </div>
    </>
  );
};

export default ChartWrapper;
