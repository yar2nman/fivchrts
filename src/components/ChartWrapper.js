import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
        boxShadow: theme.shadows[2],
        borderRadius: theme.spacing(1),
        backgroundColor: 'white',
    }
}))

const ChartWrapper = ({children, name}) => {
    const classes = useStyles();
    return <>
    <div className={classes.root}>
    {children}
    </div>
    </>
}

export default ChartWrapper;