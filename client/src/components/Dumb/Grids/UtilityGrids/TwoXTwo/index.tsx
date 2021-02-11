import React, { FunctionComponent } from 'react'
import Grid from '@material-ui/core/Grid';

//could also pass other data {such as button text} down to this component.
type Items = {
    topLeft: React.ReactNode,
    topRight: React.ReactNode,
    bottomLeft: React.ReactNode,
    bottomRight: React.ReactNode
}




export const TwoXTwo: FunctionComponent<Items> = ({
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
}) => {
    return (
        <div>
            <Grid container spacing={3} direction="column" justify="center" alignItems="center">
                <Grid container item direction="row">
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        {topLeft}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        {topRight}
                    </Grid>
                </Grid>
                <Grid container item direction="row">
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        {bottomLeft}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        {bottomRight}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
