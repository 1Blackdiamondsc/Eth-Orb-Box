import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import IntroHead from './IntroHead';

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

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <IntroHead />
                <Grid container spacing={3} direction="row">

                    <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                        <Grid className={classes.head} item xs={12}>
                            item 1
                        </Grid>
                        <Grid item className={classes.text} xs={12}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Grid>
                    </Grid>

                    <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                        <Grid className={classes.head} item xs={12} >
                            item 2
                        </Grid>
                        <Grid item className={classes.text} xs={12} >
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Grid>
                    </Grid>

                </Grid>


                <Grid container spacing={3} direction="row">

                    <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                        <Grid className={classes.head} item xs={12}>
                            item 1
                        </Grid>
                        <Grid item className={classes.text} xs={12}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Grid>
                    </Grid>

                    <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                        <Grid className={classes.head} item xs={12} >
                            item 2
                        </Grid>
                        <Grid item className={classes.text} xs={12} >
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Grid>
                    </Grid>

                </Grid>   

                <Grid container spacing={3} direction="row">

                    <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                        <Grid className={classes.head} item xs={12}>
                            item 1
                        </Grid>
                        <Grid item className={classes.text} xs={12}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Grid>
                    </Grid>

                    <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                        <Grid className={classes.head} item xs={12} >
                            item 2
                        </Grid>
                        <Grid item className={classes.text} xs={12} >
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Home;

