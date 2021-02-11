import React, { ElementType, FunctionComponent } from 'react'
import { Typography } from '@material-ui/core'

type GridProps = {
    text: string,
    color: 'primary' | 'secondary',
    align: 'center' | 'justify' | 'left' | 'right',
    variant: 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'srOnly'
    | 'inherit',
}

export const Typog: FunctionComponent<GridProps> = ({
    color,
    align,
    variant,
    text
}) => {

    return (
        <Typography align={align} color={color} variant={variant}>
            {text}
        </Typography>
    );
};
