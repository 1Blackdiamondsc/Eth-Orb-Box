import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Fade,
  Toolbar,
  Button,
  AppBar,
  ButtonGroup,
  IconButton,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useAuth } from "../../contexts/AuthContext"

const useStyles = makeStyles((theme) => ({
  itemStyles: {
    color: theme.palette.secondary.main
  },
  grow: {
    flexGrow: 1

  }
}));

export const Nav = ({
  handleThemeChange
}) => {

  const { currentUser } = useAuth()

  const classes = useStyles()
  return (
    <>
      <AppBar position="relative">
        <Toolbar variant="dense" >
          <ButtonGroup variant="text" aria-label="text secondary button group">
            <Button className={classes.itemStyles} component={Link} to="/">home</Button>
            <Button className={classes.itemStyles} component={Link} to="/Security">Security</Button>
            <Button className={classes.itemStyles} component={Link} to="/IT-support">IT Support</Button>
            <Button className={classes.itemStyles} component={Link} to="/About">about</Button>
            <Button className={classes.itemStyles} component={Link} to="/Orb">Launch Eth Orb</Button>
          </ButtonGroup>
          <IconButton color="secondary" aria-label="switch to light mode" onClick={handleThemeChange} >
            <Brightness4Icon fontSize='small' color='secondary' />
          </IconButton>
          <div className={classes.grow} />
          <ButtonGroup variant="text" aria-label="text secondary button group">
            <Button disabled={currentUser} component={Link} to="/Login">Login</Button>
            <Button disabled={currentUser} component={Link} to="/Signup">Sign Up</Button>
          </ButtonGroup>

        </Toolbar>
      </AppBar>
    </>
  );
};
