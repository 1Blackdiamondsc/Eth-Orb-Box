import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { sizing } from '@material-ui/system';
const useStyles = makeStyles(theme => ({
    root: {    
    },
}));

export default function InnerLayout(props) {
    const classes = useStyles();

    return (
        <Container>
            {props.children}
        </Container>
    )
}
