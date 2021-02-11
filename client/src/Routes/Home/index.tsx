import React, { FunctionComponent } from "react";
import { Grid, Box, } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SideBar from '../../components/SideBar/index';
import { SideBarProps } from '../../interfaces/SideBarProps';
import { OnexOne } from '../../components/Dumb/Grids/TextGrids/OnexTwo';
import { Home2 } from "./section2";
import { Home3 } from "./section3";

type Props = {
    isMedium: boolean
}
const homeItems: SideBarProps[] = [
    { id: 1, section: "section1", name: "Our Services" },
    { id: 2, section: "section2", name: "About SharpTec" },
]

export const Home: FunctionComponent<Props> = ({ isMedium }) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                height: "100vh",


            }

        })
    );


    const classes = useStyles()
    return (
        <div>
            <Grid container direction="row" spacing={0} wrap="nowrap">
                <Grid container item xs={1} md={1} lg={1} spacing={0}>
                    <Grid item >
                        < Box position="fixed" p={0} m={0} >
                            <SideBar links={homeItems} isMobile={isMedium} />
                        </Box>
                    </Grid>

                    

                </Grid>
                <Grid item xs={1} md={1} lg={1} />
                <Grid container item justify="center" xs={9} md={10} lg={9} spacing={2}>
                    <div className={classes.root}>
                        <OnexOne

                            color="primary"
                            header="Welcome To SharpTec"
                            text="We offer a variety of IT & IT Security based solutions, ranging between hardware and software. 
                            With 30+ years of experience in the IT industry, it's diffcult to say that we are not tech-savvy. Therefore,
                            it is within our best interests to offer this experience as a support service. "
                        />
                    </div>
                    <Home2 id="section1"/>
                    <Home3 id="section2"/>
                </Grid>
                <Grid item xs={1} md={1} lg={1} />
            </Grid>
        </div>
    )
}