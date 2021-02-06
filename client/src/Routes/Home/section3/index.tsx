import React, { FunctionComponent } from 'react';
import { OnexOne } from '../../../components/Dumb/Grids/TextGrids/OnexTwo';
import { TwoxOne } from '../../../components/Dumb/Grids/TextGrids/TwoxTwo';
import { ThreexOne } from '../../../components/Dumb/Grids/TextGrids/ThreexOne';
import {ScrollProps} from '../../../interfaces/ScrollProps';
import img from '../../../assets/test.png';


export const Home3: FunctionComponent<ScrollProps> = ({ id }) => {
    return (
        <div id={id}>


            <OnexOne 
                header="Let's fill you in"
                text="There is more to us than what meets the eye"
                color="primary"
            /> 
            

           

            <TwoxOne
                header1="jeffrey"
                header2="tezos"
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




