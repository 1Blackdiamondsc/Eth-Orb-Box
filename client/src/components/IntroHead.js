import React from 'react';
import styled from 'styled-components';
import bodyCover from './ComponentAssets/newhead.png'
import Image from 'material-ui-image';
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        width: 1600,
        contentAlign: 'center',
    },
    media: {
        height: 225,
    },
    title: {
        color: theme.palette.primary.main
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))


export default function IntroHead() {
    const classes = useStyles();
    return (
        <Box boxShadow={4}>
            <Image src={bodyCover} aspectRatio={5/1}/>
        </Box>

    )
}




