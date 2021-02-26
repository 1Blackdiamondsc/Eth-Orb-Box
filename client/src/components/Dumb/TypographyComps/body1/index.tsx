import React, { FunctionComponent } from 'react'
import { Typography } from '@material-ui/core';
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
    txt: string,
    color?: "primary" | "textPrimary" | "textSecondary" | "secondary" | "inherit" | "initial"
    | "textPrimary" | "textSecondary" | "error" | undefined
}
const Body1: FunctionComponent<Props> = ({ txt, color}) => {

    return (
        <Typography variant="body1" align="center" color={color || "primary"}>
           {txt}
        </Typography>
    )
}
export default Body1;


