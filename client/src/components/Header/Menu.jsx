import React from 'react';
import { Link as RLink } from 'react-router-dom';

import {
  Fade,
  MenuItem,
  Button,
  Menu,
  IconButton,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';




export const MenuFade = ({
    menuClick,
    anchorEl,
    handleClose,
    handleThemeChange,
    open
}) => {
    return (
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
                <MenuItem component={RLink} to="/Orb" onClick={handleClose}>About</MenuItem>
            </Menu>
            <IconButton aria-label="switch to light mode" onClick={handleThemeChange}>
                <Brightness4Icon fontSize='small' color='primary' />
            </IconButton>
        </>
    );
};
