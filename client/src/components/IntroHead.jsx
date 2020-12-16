import React from 'react';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';
import head from './ComponentAssets/head.png'

export default function IntroHead() {
    return (
        <Box boxShadow={4} mt={3} mb={3}>
            <Image src={head} aspectRatio={5/1}/>
        </Box>

    )
}




