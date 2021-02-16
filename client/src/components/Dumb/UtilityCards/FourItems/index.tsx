import React, { FunctionComponent, ReactNode } from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, Button, Avatar } from '@material-ui/core';


type Props = {
    title: React.ReactNode,
    item1: React.ReactNode,
    item2: React.ReactNode,
    item3: React.ReactNode,
    item4: React.ReactNode,
}


//Card component for rendering a fixed number of items as reactnodes
const FourItemsCard: FunctionComponent<Props> = ({
    title,
    item1,
    item2,
    item3,
    item4
}) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
                borderRadius: '10px',
                backgroundImage: `linear-gradient(180deg, ${theme.palette.info.main}, ${theme.palette.secondary.main})`,
                padding: '25px',
                marginTop: '15px',
                marginBottom: '15px'
            }
        })
    );

    const classes = useStyles()
    console.log()
    return (
        <div className={classes.root}>
            <Grid container direction="column" spacing={0} wrap="nowrap" >
                <Grid container item justify="flex-start">
                    <Grid item >
                        {title}
                    </Grid>
                </Grid>
                <Grid container item justify="flex-end">
                    <Grid item>
                        {item1}
                    </Grid>
                </Grid>
                <Grid container item justify="flex-end">
                    <Grid item>
                        {item2}
                    </Grid>
                </Grid>
                <Grid container item justify="flex-end">
                    <Grid item>
                        {item3}
                    </Grid>
                </Grid>
                <Grid container item justify="flex-end">
                    <Grid item>
                        {item4}
                    </Grid>
                </Grid>



            </Grid>

        </div>
    )
}

export default FourItemsCard

