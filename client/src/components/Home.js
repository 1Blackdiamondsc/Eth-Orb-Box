import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Layout from './Layout';
import IntroHead from './IntroHead';
const useStyles = makeStyles(theme => ({
      root: {
            flexGrow: 1,

      },
      text: {
            color: theme.palette.text.main,
            fontSize: theme.typography.fontSize,
      },
}));

function Home() {
      const classes = useStyles();
      return (
            <>
            <Container>
                  <IntroHead />
            </Container>
            <Container>
                  
                  <Grid container spacing={5} direction="column">
                        <Grid className={classes.text} item xs={12} container>
                                    Welcome To SharpTec
                        </Grid>
                  </Grid>
            </Container>
            </>
      )
}

export default Home;

