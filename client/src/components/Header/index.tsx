//libraries
import React, { FunctionComponent, useState, useContext, useEffect, MouseEvent } from 'react';

import { ThemeContext } from '../../themes/ThemeProvider';
import { MenuFade } from './Menu';
import { Nav } from './AppBar'
import {BreakProps} from '../../interfaces/BreakProps/index' ;

const Header: FunctionComponent<BreakProps> = ({ isMobile }) => {
  /*
    This needs the theme setter function from context to change the theme from here.
    checked as a boolean so that I can define the theme.
  */
  const setThemeName = useContext(ThemeContext);
 const [checked, setChecked] = useState(false);
 /*
   --Menu Hooks + Variables--
 anchorEl can either be null or an element to allow tsc. will be set when the menuClick is pressed.
 Allow a HTML element so that the click event argument can match it.
 open boolean is here so menu can be open if anchorEl has been set (menuClick was clicked)
 */
 const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
 const open = Boolean(anchorEl);

 /* 
   --Menu Handlers--
   Open the menu when icon is pressed. I can define the anchorEl state variable with event argument from the click.
   setAnchorEl back to null when a MenuItem is pressed.
 */
 const menuClick = (event: MouseEvent<HTMLElement>) => {
   setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
   setAnchorEl(null);
 };

 // When user changes theme. First, switch the state variable.
 const handleThemeChange =  () => {
   setChecked((prev) => !prev);
 };

 //set the theme from context if theme boolean is checked.
 useEffect(() => {
   setThemeName(checked? "lightTheme" : "darkTheme");
 }, [checked]);
 /*
   --Return Statement--
   return AppBar for desktop and menu for mobile viewports.
 */
 return (
   <div >
     {isMobile? (
         <MenuFade 
           menuClick={menuClick} 
           anchorEl={anchorEl} 
           handleClose={handleClose} 
           handleThemeChange={handleThemeChange} 
           open={open}
         />
     ) : (
         <Nav handleThemeChange={handleThemeChange}/>
       )
     }
   </div>
 );
};
export default React.memo(Header)
