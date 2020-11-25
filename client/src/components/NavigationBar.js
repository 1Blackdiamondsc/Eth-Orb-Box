//libraries
import React, { useState, useEffect } from 'react';
import { Link as RLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Fade,
  MenuItem,
  Button,
  Menu,
  Tabs,
  Tab
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';



//makeStyles hook from mui, passing in the theme provided from top level.
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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


function NavigationBar() {

  const classes = useStyles();
  const theme = useTheme();
  //menu hooks
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  //tabs hooks
  const [value, setValue] = useState(0);
  //for rendering the menu or tabs
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);

  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
          </Menu>
        </>
      ) : (
          <>
            <Tabs
              value={value}
              centered
              className={classes.barItems}
              indicatorColor="primary"
              onChange={handleChange}
            >
              <Tab component={RLink} to="/" label="Home" />
              <Tab component={RLink} to="/Services" label="Services" />
              <Tab component={RLink} to="/About" label="About" />
            </Tabs>
          </>
        )
      }
    </div>
  );
}

export default NavigationBar;
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
