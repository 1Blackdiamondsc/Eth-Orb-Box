import React from 'react';
import { Link as RLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  ButtonGroup,
  Fade,
  MenuItem,
  Button,
  Menu,
  Paper,
  Tabs,
  Tab
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
  },
  popOuts: {
    color: theme.palette.text.light,
    fontFamily: theme.typography.headers.fontFamily,
  },
  barItems: {
    color: theme.palette.text.light,
    fontFamily: theme.typography.headers.fontFamily,
    indicatorColor: theme.palette.text.light,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  text: {
    color: theme.palette.primary.bgDark
  }
}));

//consider using classes.breakpoints.
export default function NavigationBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  //return tabs for desktop and menu for mobile viewports.
  return (
    <div className={classes.root}>

      {isMobile ? (
        <>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon className={classes.icon} />
          </Button>
          <Menu
            className={classes.icon}
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem className={classes.popOuts} component={RLink} to="/" onClick={handleClose}>Home</MenuItem>
            <MenuItem className={classes.popOuts} component={RLink} to="/Services" onClick={handleClose}>Services</MenuItem>
            <MenuItem className={classes.popOuts} component={RLink} to="/About" onClick={handleClose}>About</MenuItem>
            <MenuItem className={classes.popOuts} component={RLink} to="/Eth-Orb" onClick={handleClose}>Eth-Orb</MenuItem>
          </Menu>
        </>
      ) : (
          <>
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              className={classes.barItems}
              indicatorColor="primary"
            >
              <Tab component={RLink} to="/" label="Home" />
              <Tab component={RLink} to="/Services" label="Services" />
              <Tab component={RLink} to="/About" label="About" />
              <Tab component={RLink} to="/Eth-Orb" label="Eth-Orb" />
            </Tabs>
          </>
        )}



    </div>
  );
}

/*

      <Button className={classes.barItems} component={RLink} to="/">
        Home
      </Button>
      <Button className={classes.barItems} component={RLink} to="/Services">
        Services
      </Button>
      <Button className={classes.barItems} component={RLink} to="/About">
        About
      </Button>




*/
