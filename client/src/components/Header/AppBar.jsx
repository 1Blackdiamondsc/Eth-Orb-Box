import React, { useState, useContext, useEffect, MouseEvent, FunctionComponent } from 'react';
import { Link as RLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {
  Fade,
  Toolbar,
  Button,
  AppBar,
  ButtonGroup,
  IconButton,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';





export const Nav = ({
    handleThemeChange
}) => {
    return (
        <>
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
          </>
    );
};
