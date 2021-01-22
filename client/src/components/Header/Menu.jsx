import React from 'react';
import { Link as RLink } from 'react-router-dom';
import {
    Fade,
    MenuItem,
    Button,
    Menu,
    IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    menuPaper: {
        backgroundColor: theme.palette.primary.main
    },
    itemStyles: {
        color: theme.palette.secondary.main
    }
}));

export const MenuFade = ({
    menuClick,
    anchorEl,
    handleClose,
    handleThemeChange,
    open
}) => {
    const classes = useStyles()
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
                classes={{ paper: classes.menuPaper }}
            >
                <MenuItem className={classes.itemStyles} component={RLink} to="/" onClick={handleClose}>Home</MenuItem>
                <MenuItem className={classes.itemStyles} component={RLink} to="/Services" onClick={handleClose}>Services</MenuItem>
                <MenuItem className={classes.itemStyles} component={RLink} to="/About" onClick={handleClose}>About</MenuItem>
                <MenuItem className={classes.itemStyles} component={RLink} to="/Orb" onClick={handleClose}>Launch Eth Orb</MenuItem>
            </Menu>
            <IconButton aria-label="switch to light mode" onClick={handleThemeChange}>
                <Brightness4Icon fontSize='small' color='primary' />
            </IconButton>
        </>
    );
};
