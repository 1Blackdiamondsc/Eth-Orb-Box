import React,  { FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

type GridProps = {
    header: string,
    text: string
}

export const OnexOne: FunctionComponent<GridProps> = ({header, text}) => {
    return (
        <div>
            <Grid container spacing={3} direction="row">
                <Grid container item spacing={4} alignItems="center" direction="column" xs={12}>
                    <Grid item >
                        <Typography color='primary'>
                            {header}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography color='primary'>
                            {text}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
