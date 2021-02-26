import React, { FunctionComponent } from 'react'
import { Typography } from '@material-ui/core';
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

type Props = {
    txt: string,
    color?: "primary" | "secondary" | "inherit" | "initial"
    | "textPrimary" | "textSecondary" | "error" | undefined
}
const Header2: FunctionComponent<Props> = ({ txt, color}) => {

    return (
        <Typography variant="h2" align="center" color={color || "primary"}>
           {txt}
        </Typography>
    )
}
export default Header2;


