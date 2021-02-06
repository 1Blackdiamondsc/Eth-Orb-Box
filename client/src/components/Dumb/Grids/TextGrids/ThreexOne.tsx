import React, { FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';

type GridProps = {
    header1: string,
    header2: string,
    header3: string,
    text1: string,
    text2: string,
    text3: string,
}

export const ThreexOne: FunctionComponent<GridProps> = ({ header1, header2, header3, text1, text2, text3 }) => {
    return (
        <div>
            <Grid container spacing={4} direction="row">

                <Grid container item spacing={2} alignItems="center" direction="column" xs={4}>
                    <Grid item>
                        <Typography align='center' color='primary' component="h1">
                           
                                {header1}
                    
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align='center' color='primary' variant='body2'>
                            {text1}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item spacing={2} alignItems="center" direction="column" xs={4}>
                    <Grid item>
                        <Typography align='center' color='primary'>
                            {header2}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align='center' color='primary' variant='body2'>
                            {text2}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item spacing={2} alignItems="center" direction="column" xs={4}>
                    <Grid item>
                        <Typography align='center' color='primary'>
                            {header3}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align='center' color='primary' variant='body2'>
                            {text3}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};




