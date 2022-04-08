import React from "react";
import { Grid } from "@material-ui/core";


const ChartWrapper = ({ children, name, height }) => {
  height = height || 200
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12}><b>{name}</b></Grid>
        <Grid item xs={12} style={{ height: height + 'px', }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default ChartWrapper;
