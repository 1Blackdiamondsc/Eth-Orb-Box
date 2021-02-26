import React, { FunctionComponent } from 'react'
import { Typography } from '@material-ui/core';
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
    txt: string,
    color?: "primary" | "secondary" | "inherit" | "initial"
    | "textPrimary" | "textSecondary" | "error" | undefined
    align ?: "left" | "center" | "right"
}
const Header1: FunctionComponent<Props> = ({ txt, color, align}) => {

    return (
        <Typography variant="h1" align={align || "center"} color={color || "primary"}>
           {txt}
        </Typography>
    )
}
export default Header1;


