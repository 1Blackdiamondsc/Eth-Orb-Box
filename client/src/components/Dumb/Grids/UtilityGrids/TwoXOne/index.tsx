import React, { FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid';
//could also pass other data {such as button text} down to this component.
type GridProps = {
    left: React.ReactNode,
    right: React.ReactNode,
    topSpacing: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const TwoCards: FunctionComponent<GridProps> = ({ left, right, topSpacing }) => {

    return (
        <div>
            <Grid container spacing={topSpacing} direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                   {left}
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                   {right}
                </Grid>
            </Grid>
        </div>
    );
};
