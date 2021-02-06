import React, {FunctionComponent} from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
type GridProps = {
    header1: string,
    header2: string,
    text1: string,
    text2: string,

}

export const TwoxOne: FunctionComponent<GridProps> = ({header1, header2, text1, text2}) => {

    

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: { 
                
                paddingTop: 75,
                paddingBottom: 75
            }
        }),
    );



    const classes = useStyles()
    return (

        <div className={classes.root}>
            <Grid container spacing={2} justify="center" direction="row">
  
                <Grid container item spacing={1} justify="center" alignItems="center" direction="column" xs={6}>
                    <Grid item  >
                        <Typography align='center' color='primary' variant='h2'>
                            {header1}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography align='center' color='primary' variant='body2'>
                            {text1}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item spacing={1} justify="center" alignItems="center" direction="column" xs={6}>
                    <Grid item>
                        <Typography  align='center' color='primary' variant='h2'>
                            {header2}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography  align='center' color='primary' variant='body2'>
                            {text2}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

        </div>

    );

};
