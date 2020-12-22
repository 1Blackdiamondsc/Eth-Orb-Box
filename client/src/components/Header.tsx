//libraries
import React, { useState, useContext, useEffect, MouseEvent } from 'react';
import { Link as RLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {
  Fade,
  MenuItem,
  Button,
  Menu,
  AppBar,
  Toolbar,
  IconButton,
  Icon,
  ButtonGroup,
  Box
} from '@material-ui/core';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeContext } from '../themes/ThemeProvider';



function Header() {
  /*
    This needs the theme setter function from context to change the theme from here.
    checked as a boolean so that I can define the theme.
  */
  const setThemeName = useContext(ThemeContext);
  const [checked, setChecked] = React.useState(false);
  /*
    --Menu Hooks + Variables--
  anchorEl can either be null or an element to allow tsc. will be set when the menuClick is pressed.
  Allow a HTML element so that the click event argument can match it.
  open boolean is here so menu can be open if anchorEl has been set (menuClick was clicked)
  */
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Grab the breakpoints from theme to use as boolean for conditional render.
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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

  useEffect(() => {
    setThemeName(checked? "lightTheme" : "darkTheme");
  }, [checked]);
  /*
    --Return Statement--
    return AppBar for desktop and menu for mobile viewports.
  */
  return (
    <div >
      {isMobile ? (
        <>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={menuClick}>
            <MenuIcon color='primary' />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem component={RLink} to="/" onClick={handleClose}>Home</MenuItem>
            <MenuItem component={RLink} to="/Services" onClick={handleClose}>Services</MenuItem>
            <MenuItem component={RLink} to="/About" onClick={handleClose}>About</MenuItem>
          </Menu>
          <IconButton aria-label="switch to light mode" onClick={handleThemeChange}>
            <Brightness4Icon fontSize='small' color='primary' />
          </IconButton>
        </>
      ) : (
          <AppBar position="relative">
            <Toolbar variant="dense" >
              <ButtonGroup variant="text" color="default" aria-label="text secondary button group">
                <Button variant='text' color='secondary' component={RLink} to="/">home</Button>
                <Button variant='text' color='secondary' component={RLink} to="/Services">serv</Button>
                <Button variant='text' color='secondary' component={RLink} to="/About">about</Button>
                <Button variant='text' color='secondary' component={RLink} to="/Orb">apitest</Button>
              </ButtonGroup>
              <IconButton color="secondary" aria-label="switch to light mode" onClick={handleThemeChange}>
                <Brightness4Icon fontSize='small' color='secondary' />
              </IconButton>

            </Toolbar>
          </AppBar>
        )
      }
    </div>
  );
}

export default Header;
