import React, {FunctionComponent} from 'react'
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

type GridProps = {
    header1: string,
    header2: string,
    text1: string,
    text2: string,
    space?: number
}

export const TwoxOne: FunctionComponent<GridProps> = ({header1, header2, text1, text2, space}) => {
    return (

        <div>
            <Grid container spacing={4} direction="row">
  
                <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                    <Grid item  >
                        <Typography color='primary'>
                            {header1}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography color='primary'>
                            {text1}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item spacing={2} alignItems="center" direction="column" xs={6}>
                    <Grid item>
                        <Typography color='primary'>
                            {header2}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography color='primary'>
                            {text2}
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

        </div>

    );

};
