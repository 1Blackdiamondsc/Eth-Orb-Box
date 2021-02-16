import React, { FunctionComponent } from "react";
import { Grid, Box, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SideBar from '../../components/SideBar/index';
import { SideBarProps } from '../../interfaces/SideBarProps';
import { CardData } from '../../interfaces/CardInterface';
import { OnexTwo } from '../../components/Dumb/Grids/UtilityGrids/OnexTwo';
import { Typog } from "../../components/Dumb/TypographyComps";
import { TwoCards } from '../../components/Dumb/Grids/UtilityGrids/TwoXOne';
import { ThreeCards } from '../../components/Dumb/Grids/UtilityGrids/ThreeXOne';
import { MediaCard } from '../../components/Dumb/Grids/CardGrids/Cards/Card';
import img from '../../components/assets/test.png'
import InfoCard from "../../components/Dumb/UtilityCards/PresentCards";
import FourItemsCard from "../../components/Dumb/UtilityCards/FourItems";
import Layout from "../../components/Layouts/Content&Sidebar";

type Props = {
    isMedium: boolean
}


const sidebarItems: SideBarProps[] = [
    { id: 1, section: "section1", name: "Our Services" },
    { id: 2, section: "section2", name: "About SharpTec" },
]


export const Home: FunctionComponent<Props> = ({ isMedium }) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1
            },
            full: {
                height: "100vh",
                paddingTop: 125,
                paddingBottom: 125,
            },
            card: {
                borderRadius: '25px',
                backgroundColor: 'linear-gradient(180deg, red, yellow)'

            }

        })
    );

    /*
        Using new layout component, so that every route can reuse this layout, 
        or any other layouts I make.

        Render sidebar for leftItem (grid item xs=1), 
        passing in props for link items and responsive behaviour.

        Then I can compose the center div with a decent level of authority.
    */
    const classes = useStyles()
    return (
        <div>
            <Layout
                LeftPosition="fixed"
                LeftItem={
                    <SideBar links={sidebarItems} isMobile={isMedium} />
                }
                Center={
                    <div className={classes.root}>
                        <div className={classes.full}>
                            <OnexTwo
                                header={
                                    <Typog
                                        text="Welcome To Sharptec"
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


                        <div id="section1" className={classes.full}>
                            <OnexTwo
                                header={
                                    <Typog
                                        text="Our Services"
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


                        <div className={classes.root}>


                            <InfoCard
                                title={
                                    <Typog
                                        variant="h1"
                                        align="center"
                                        color="primary"
                                        text="Info Card Here"
                                    />
                                }
                                body={
                                    <Typog
                                        variant="body2"
                                        align="center"
                                        color="primary"
                                        text="Info Card Here, Info Card Here, Info Card Here, Info Card Here, Info Card Here, Info Card Here"
                                    />
                                }
                            />

                            <ThreeCards
                                topSpacing={3}
                                left={
                                    <InfoCard
                                        title={
                                            <Typog
                                                variant="h1"
                                                align="center"
                                                color="primary"
                                                text="Info Card Here"
                                            />
                                        }
                                        body={
                                            <Typog
                                                variant="body2"
                                                align="center"
                                                color="primary"
                                                text="Info Card Here, Info Card Here, Info Card Here, Info Card Here, Info Card Here, Info Card Here"
                                            />
                                        }
                                    />
                                }
                                mid={
                                    <FourItemsCard
                                        title={
                                            <Typog
                                                text="Account Overview"
                                                align="center"
                                                color="primary"
                                                variant="h1"
                                            />
                                        }
                                        item1={
                                            <Typog
                                                text="most valuable items :"
                                                align="center"
                                                color="primary"
                                                variant="body2"
                                            />
                                        }
                                        item2={
                                            <Typog
                                                text="Current balance :"
                                                align="center"
                                                color="primary"
                                                variant="body2"
                                            />
                                        }
                                        item3={
                                            <Typog
                                                text="Current balance :"
                                                align="center"
                                                color="primary"
                                                variant="body2"
                                            />
                                        }
                                        item4={
                                            <Typog
                                                text="Current balance :"
                                                align="center"
                                                color="primary"
                                                variant="body2"
                                            />
                                        }
                                    />
                                }
                                right={
                                    <InfoCard
                                        title={
                                            <Typog
                                                variant="h1"
                                                align="center"
                                                color="primary"
                                                text="Info Card Here"
                                            />
                                        }
                                        body={
                                            <Typog
                                                variant="body2"
                                                align="center"
                                                color="primary"
                                                text="Info Card Here, Info Card Here, Info Card Here, Info Card Here, Info Card Here, Info Card Here"
                                            />
                                        }
                                    />
                                }
                            />

                            <TwoCards
                                topSpacing={5}
                                left={
                                    <Typog
                                        align='center'
                                        color='primary'
                                        variant='h1'
                                        text='Example '
                                    />
                                }
                                right={
                                    <MediaCard
                                        img={img}
                                        header="blockchainnnnn"
                                        text="3rd card, about"
                                        link="/About"
                                    />
                                }
                            />

                        </div>
                        <div id="section2" className={classes.full}>
                            <OnexTwo
                                header={
                                    <Typog
                                        text="Let's fill you in"
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
                        <div className={classes.root} >

                            <ThreeCards
                                topSpacing={5}
                                left={
                                    <MediaCard
                                        img={img}
                                        header="blockchainnnnn"
                                        text="1st card, it support"
                                        link="/IT-support"
                                    />
                                }
                                mid={
                                    <MediaCard
                                        img={img}
                                        header="blockchainnnnn"
                                        text="2nd card, security"
                                        link="/Security"
                                    />
                                }
                                right={
                                    <MediaCard
                                        img={img}
                                        header="blockchainnnnn"
                                        text="3rd card, about"
                                        link="/About"
                                    />
                                }
                            />

                            <TwoCards
                                topSpacing={5}
                                left={
                                    <Typog
                                        align='center'
                                        color='primary'
                                        variant='h1'
                                        text='Example '
                                    />
                                }
                                right={
                                    <MediaCard
                                        img={img}
                                        header="blockchainnnnn"
                                        text="3rd card, about"
                                        link="/About"
                                    />
                                }
                            />

                        </div>

                    </div>
                }


            />
        </div>
    )
}