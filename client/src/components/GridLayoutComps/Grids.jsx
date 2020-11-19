import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    head: {
        color: theme.palette.heads.main,
        fontSize: theme.typography.headers.fontSize,
        fontFamily: theme.typography.headers.fontFamily,
    },
    text: {
        color: theme.palette.primary.side,
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeightSemiLight,
    },
}));
/*
export default function TwoByOneGrid(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row">

                <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                    <Grid item className={classes.head} >
                        {props.header1}
                    </Grid>
                    <Grid item className={classes.text}>
                        {props.text1}
                    </Grid>
                </Grid>

                <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                    <Grid item className={classes.head}  >
                        {props.header2}
                    </Grid>
                    <Grid item className={classes.text}>
                        {props.text2}
                    </Grid>
                </Grid>

            </Grid>

        </div>
    )
}
*/
export const TwoByOneGrid = (props) => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Grid container spacing={3} direction="row">

                <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                    <Grid item className={classes.head} >
                        {props.header1}
                    </Grid>
                    <Grid item className={classes.text}>
                        {props.text1}
                    </Grid>
                </Grid>

                <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                    <Grid item className={classes.head}  >
                        {props.header2}
                    </Grid>
                    <Grid item className={classes.text}>
                        {props.text2}
                    </Grid>
                </Grid>

            </Grid>

        </div>

    );

};

export const ThreeByOneGrid = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="row">

                <Grid container item spacing={2} alignItems="center" direction="column" xs={4}>
                    <Grid item className={classes.head}>
                        {props.header1}
                    </Grid>
                    <Grid item className={classes.text}>
                        {props.text1}
                    </Grid>
                </Grid>

                <Grid container item spacing={2} alignItems="center" direction="column" xs={4}>
                    <Grid item className={classes.head}>
                        {props.header2}
                    </Grid>
                    <Grid item className={classes.text}>
                        {props.text2}
                    </Grid>
                </Grid>

                <Grid container item spacing={2} alignItems="center" direction="column" xs={4}>
                    <Grid className={classes.head} item>
                        {props.header3}
                    </Grid>
                    <Grid item className={classes.text}>
                        {props.text3}
                    </Grid>
                </Grid>

            </Grid>

        </div>
    );


};

TwoByOneGrid.propTypes = {
    header1: PropTypes.string,
    header2: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string
};

ThreeByOneGrid.propTypes = {
    header1: PropTypes.string,
    header2: PropTypes.string,
    header3: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string
};