import React, { FunctionComponent, useRef, useState } from "react"
import { TextField, Button, Container, Grid, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
    LeftItem: React.ReactNode,
    LeftPosition: "fixed" | "static", 
    Center: React.ReactNode
}
//LeftItem is a small grid item for a sidebar or strip.
//LeftPosition prop can determine the css position for LeftItem
//center will be the main content of the layout 

const Layout: FunctionComponent<Props> = ({
    LeftItem,
    Center,
    LeftPosition
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
            <Grid container direction="row" spacing={0} wrap="nowrap">
                <Grid container item xs={1} md={1} lg={1} spacing={0}>
                    <Grid item >
                        < Box position={LeftPosition} p={0} m={0} >
                            {LeftItem}
                        </Box>
                    </Grid>
                </Grid>

                <Grid item xs={1} md={1} lg={1} />

                <Grid container item justify="center" xs={9} md={10} lg={9} spacing={2}>
                    {Center}

                </Grid>
                <Grid item xs={1} md={1} lg={1} />
            </Grid>


        </div>
    )
}
export default Layout