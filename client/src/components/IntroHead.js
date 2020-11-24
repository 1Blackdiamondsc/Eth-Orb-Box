import React from 'react';
import bodyCover from './ComponentAssets/newhead.png'
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';

export default function IntroHead() {
    return (
        <Box boxShadow={4} mt={3} mb={3}>
            <Image src={bodyCover} aspectRatio={5/1}/>
        </Box>

    )
}




