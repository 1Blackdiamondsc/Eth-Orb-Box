import React, { FunctionComponent, useRef, useState } from "react"
import { TextField, Button, Container, Grid, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
    children: React.ReactNode
}
//LeftItem is a small grid item for a sidebar or strip.
//LeftPosition prop can determine the css position for LeftItem
//center will be the main content of the layout 

const Layout2: FunctionComponent<Props> = ({
    children
}) => {


    const useStyles = makeStyles((theme) =>
        createStyles({
            root: {
                flexGrow: 1
            },
        }),
    );

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container direction="row" spacing={2} wrap="nowrap">
                
                <Grid item xs={false} md={false} lg={1} />

                <Grid container item direction="column" justify="center" xs={12} md={12} lg={10} spacing={0}>
                    {children}
                </Grid>
                
                <Grid item xs={false} md={false} lg={1} />
            </Grid>


        </div>
    )
}
export default Layout2