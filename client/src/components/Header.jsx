//libraries
import React, { useState, useEffect } from 'react';
import { Link as RLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Fade,
  MenuItem,
  Button,
  Menu,
  Switch,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';


function Header(props) {

  //makeStyles hook from mui, passing in the theme provided from top level.
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    popOuts: {
      color: theme.palette.text.light,
      fontFamily: theme.typography.headers.fontFamily,
    },
    //appbar
    bar: {
      backgroundColor: props.checked ? theme.palette.primary.bgDark : theme.palette.text.light,
    },
    barItems: {
      color: props.checked ? 'primary' : 'secondary' 
    },
    icon: {
     
    },
    text: {
      color: theme.palette.primary.bgDark
    },
  }));
  //Include the useStyles/Theme hook as const
  const classes = useStyles();
  const theme = useTheme();
  //menu hooks
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  //tabs hooks
  const [value, setValue] = useState(0);
  //for rendering the menu or tabs depending on viewport
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile + "true=Mobile viewport size. false=desktop view");

  const handleClose = (event) => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //handle the lightmode switch with props passed from App/index
  const handleThemeChange = () => {
    props.setLightMode(!props.checked);
  }
  /*
    --Return Statement--
    return tabs for desktop and menu for mobile viewports.
  
  
  */
  return (
    <div className={classes.root}>
      {isMobile ? (
        <>
          <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon className={classes.icon} />
          </Button>
          <Menu
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
          <Switch checked={props.checked} onChange={handleThemeChange} color='primary' className={classes.switch} />
        </>
      ) : (
          <>
            <AppBar position="static" className={classes.bar}>
              <Toolbar variant="regular" >
                <Button color= {props.checked ? 'primary' : 'secondary' } component={RLink} to="/">home</Button>
                <Button color= {props.checked ? 'primary' : 'secondary' } component={RLink} to="/Services">serv</Button>
                <Button color= {props.checked ? 'primary' : 'secondary' } component={RLink} to="/About">about</Button>
                <Button color= {props.checked ? 'primary' : 'secondary' }  component={RLink} to="/Orb">apitest</Button>
                <Brightness4Icon fontSize='small' color= {props.checked ? 'primary' : 'secondary' } />
                <Switch checked={props.checked} onChange={handleThemeChange}  color='primary' className={classes.switch} />
              </Toolbar>
            </AppBar>

          </>
        )
      }
    </div>
  );
}

export default Header;
