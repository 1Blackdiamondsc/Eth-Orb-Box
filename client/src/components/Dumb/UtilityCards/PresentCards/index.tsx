import React, { FunctionComponent, ReactNode } from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Box, Button, Avatar } from '@material-ui/core';

type Props = {
    title: React.ReactNode,
    body: React.ReactNode,
}

const InfoCard: FunctionComponent<Props> = ({
    title,
    body,

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
            <Grid container direction="column" justify="center" spacing={2} wrap="nowrap" >
                <Grid item xs={12}>
                    {title}
                </Grid>
                <Grid item>
                    {body}
                </Grid>
            </Grid>
        </div>
    )
}

export default InfoCard

