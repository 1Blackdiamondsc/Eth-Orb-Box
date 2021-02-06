import React, { FunctionComponent, useState } from 'react';
import { Container, Button, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { OnexOne } from '../../../components/Dumb/Grids/TextGrids/OnexTwo'

export const Home: FunctionComponent = () => {


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [supply, setSupply] = useState()

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                height: "100vh",
      

            }

        })
    );

    
    const classes = useStyles()
    return (
        <div className={classes.root}>
                <OnexOne
                
                    color="primary"
                    header="Welcome To SharpTec"
                    text="We offer a variety of IT & IT Security based solutions, ranging between hardware and software. 
                    With 30+ years of experience in the IT industry, it's diffcult to say that we are not tech-savvy. Therefore,
                    it is within our best interests to offer this experience as a support service. "
                />
        </div>
    );
};


/*


root: {
            height: 1080,
            backgroundImage: `url(${cape})`,
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',

        },


 <div className={classes.root} id={id}>

            <div className={classes.gridContainer}>
                <OnexOne
                    color="secondary"
                    header="Welcome To SharpTec"
                    text="We offer a variety of IT & IT Security based solutions, ranging between hardware and software.
                    With 30+ years of experience in the IT industry, it's diffcult to say that we are not tech-savvy. Therefore,
                    it is within our best interests to offer this experience as a support service. "
                />

        </div>
*/

