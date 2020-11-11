import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {Link as RLink} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles(theme => ({
    text: {
      color: theme.palette.text.main,
    },
    icon: {
      color: theme.palette.primary.main,
    },
    textBg: {
      color: theme.palette.bgColors.main
    }
  }));

export default function NavigationBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
 
  
  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon className={classes.icon} />
      </Button>
      <Menu
        className={classes.textBg}
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem className={classes.text} component={RLink} to="/" onClick={handleClose}>Home</MenuItem>
        <MenuItem className={classes.text} component={RLink} to="/Services" onClick={handleClose}>Security</MenuItem>
        <MenuItem className={classes.text} component={RLink} to="/About" onClick={handleClose}>About</MenuItem>
        <MenuItem className={classes.text} component={RLink} to="/Eth-Orb" onClick={handleClose}>Eth-Orb</MenuItem>
      </Menu>
    </div> 
  );
}

/*

                <Menu size='massive' className='menuStyles'>
                    <Menu.Item
                        name='Home'
                        as={Link}
                        to='/'
                    />
                    <Menu.Item
                        name='Security'
                        as={Link}
                        to='/Security'
                    />
                    <Menu.Item
                        name='Links'
                        as={Link}
                        to='/Links'
                    />
                </Menu>

*/