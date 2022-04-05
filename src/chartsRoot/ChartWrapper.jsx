import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    boxShadow: theme.shadows[2],
    borderRadius: 5,
    backgroundColor: "white",
    position: "relative",
    // paddingTop: theme.spacing(3),
  },
  child: {
    height: "90%",
    width: "100%",
    position: "absolute",
    top: 40,
    left: 0,
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
    <Grid container spacing={0}>
      <Grid item xs={12}>{name}</Grid>
      
      
      <Grid item xs={12} style={{height: 200 + 'px',}}>
        {children}
      </Grid>

    </Grid>
     
     
    </>
  );
};

export default ChartWrapper;
