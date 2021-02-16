import React, { FunctionComponent } from "react";
import { Grid, Box, } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SideBar from '../../components/SideBar/index';
import { OnexTwo } from '../../components/Dumb/Grids/UtilityGrids/OnexTwo';
import { Typog } from "../../components/Dumb/TypographyComps";
import { Sec1 } from "./section1";
import { Sec2 } from "./section2";
import { SideBarProps } from '../../interfaces/SideBarProps';
type Props = {
    isMedium: boolean
}

const secItems: SideBarProps[] = [
    { id: 0, section: "section1", name: "Cyber Security" },
    { id: 1, section: "section2", name: "Physical Security" },
]

export const Sec: FunctionComponent<Props> = ({ isMedium }) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            intro: {
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
                            <SideBar links={secItems} isMobile={isMedium} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1} lg={1} />
                <Grid container item justify="center" xs={9} md={10} lg={9} spacing={2}>
                    <div className={classes.intro}>
                        <OnexTwo
                            header={
                                <Typog
                                    text="Our Security Services"
                                    align="center"
                                    color="primary"
                                    variant="h1"
                                />
                            }
                            text={
                                <Typog
                                    text="We offer a variety of IT & IT Security based solutions, ranging between hardware and software. 
                                With 30+ years of experience in the IT industry, it's diffcult to say that we are not tech-savvy. 
                                Therefore, it is within our best interests to offer this experience as a support service."
                                    align="center"
                                    color="primary"
                                    variant="body1"
                                />
                            }
                        />
                    </div>
                    <Sec1 id="section1" />
                    <Sec2 id="section2" />



                </Grid>
                <Grid item xs={1} md={1} lg={1} />
            </Grid>
        </div>
    )
}