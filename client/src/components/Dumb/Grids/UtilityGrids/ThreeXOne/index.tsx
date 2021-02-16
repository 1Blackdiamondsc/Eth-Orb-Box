import React, { FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid';

type GridProps = {
    left: React.ReactNode,
    mid: React.ReactNode,
    right: React.ReactNode,
    topSpacing: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const ThreeCards: FunctionComponent<GridProps> = ({
    left,
    mid,
    right,
    topSpacing
}) => {

    return (
        <div>
            <Grid container spacing={topSpacing} direction="row" justify="space-between" alignItems="center">
                <Grid item xs={12} lg={4}>
                   {left}
                </Grid>
                <Grid item xs={12} lg={4}>
                   {mid}
                </Grid>
                <Grid item xs={12} lg={4}>
                   {right}
                </Grid>
            </Grid>
        </div>
    );
};
