import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
}));

export default ({ children, title }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {title && <Typography variant="h4">{title}</Typography>}
        <br />
        <Grid container spacing={2}>
          {children}
        </Grid>
      </div>
    </>
  );
};
