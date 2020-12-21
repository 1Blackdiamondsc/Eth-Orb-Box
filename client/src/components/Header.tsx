//libraries
import React, { useState, useContext, MouseEvent } from 'react';
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
  IconButton
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeContext } from '../Styles/ThemeProvider';


function Header() {


  const setThemeName = useContext(ThemeContext);
  const [checked, setChecked] = React.useState(false);
  //menu hooks and vars
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  //Grab the breakpoints from theme to use as boolean for conditional render.
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile + "true=Mobile viewport size. false=desktop view");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = () => {
    setChecked((prev) => !prev);
    if (checked) {
      setThemeName("lightTheme");
      console.log('lightThemeSet');
    }
    else {
      setThemeName("darkTheme");
      console.log('darkThemeSet');
    }
    console.log('outside if block')
  }

  /*
    --Return Statement--
    return AppBar for desktop and menu for mobile viewports.
  */
  return (
    <div >
      {isMobile ? (
        <>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
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
          <IconButton color="secondary" aria-label="switch to light mode" onClick={handleThemeChange}>
            <Brightness4Icon fontSize='small' color='secondary' />
          </IconButton>
        </>
      ) : (
          <>
            <AppBar position="fixed" >
              <Toolbar variant="dense" >
                <Button variant='text' color='secondary' component={RLink} to="/">home</Button>
                <Button variant='text' color='secondary' component={RLink} to="/Services">serv</Button>
                <Button variant='text' color='secondary' component={RLink} to="/About">about</Button>
                <Button variant='text' color='secondary' component={RLink} to="/Orb">apitest</Button>
                <IconButton color="secondary" aria-label="switch to light mode" onClick={handleThemeChange}>
                  <Brightness4Icon fontSize='small' color='secondary' />
                </IconButton>
              </Toolbar>
            </AppBar>

          </>
        )
      }
    </div>
  );
}

export default Header;
