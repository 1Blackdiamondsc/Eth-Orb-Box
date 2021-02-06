import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom'
import { TwoxOne } from '../../../components/Dumb/Grids/TextGrids/TwoxTwo';
import { OnexOne } from '../../../components/Dumb/Grids/TextGrids/OnexTwo';
import { TwoCards } from '../../../components/Dumb/Grids/CardGrids/TwoXOne';
import { ThreeCards } from '../../../components/Dumb/Grids/CardGrids/ThreeXOne';
import { MediaCard } from '../../../components/Dumb/Grids/CardGrids/Cards/Card'
import img from '../../../components/assets/test.png';
import { ScrollProps } from '../../../interfaces/ScrollProps';

//window.location.pathname
export const Home2: FunctionComponent<ScrollProps> = ({ id }) => {
    return (
        <div id={id}>


            <OnexOne header="What we do" text="ez  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute iru ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute iru ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute iru" color="primary" />


            <ThreeCards
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
                left={
                    <MediaCard
                        img={img}
                        header="blockchainnnnn"
                        text="3rd card, about"
                        link="/About"
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
            <TwoxOne

                header1="IT Solutions"
                header2="IT Security"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />


            <TwoxOne

                header1="IT Solutions"
                header2="IT Security"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />


        </div>
    );
};




