import React, { FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type GridProps = {
    header: React.ReactNode,
    text: React.ReactNode,

    
 
}

/*
    ONE by ONE grid/div component
    color prop allows for more control

*/
export const OnexTwo: FunctionComponent<GridProps> = ({ header, text }) => {
   
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: { 
                maxHeight: "100vh",
                paddingTop: 100,
                paddingBottom: 100,
                paddingRight: 0,
                paddingLeft: 0
            }
        }),
    );



    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={5} direction="column" alignItems="center" justify="center" >
                <Grid  item xs={12} lg={12}>
                    {header}
                </Grid>

                <Grid item  xs={12} lg={12}>
                    {text}
                </Grid>
            </Grid>
        </div>
    );
};
