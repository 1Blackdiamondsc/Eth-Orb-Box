import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link, animateScroll as scroll } from "react-scroll";
import { BreakProps } from '../../interfaces/BreakProps/index' ;


//use scroll method from react-scroll for user to scroll up.
const scrollToTop = () => {
  scroll.scrollToTop();
};
//makeStyles hook from mui
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
    },
    ItemText: {
      color: theme.palette.primary.main
    }
  }),
);
const SideBar: FunctionComponent<BreakProps> = ({ isMobile }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {isMobile ?
        (
          <List component="nav" aria-label="sidebar">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ListItem  button>
                <ListItemIcon>
                  < LooksOneIcon color="primary" />
                </ListItemIcon>

              </ListItem>

            </Link>

            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ListItem button>
                <ListItemIcon>
                  <LooksTwoIcon color="primary" />
                </ListItemIcon>

              </ListItem>
            </Link>

            <ListItem button onClick={scrollToTop}>
              <ListItemIcon>
              <ArrowUpwardIcon color="primary" />
              </ListItemIcon>

            </ListItem>
          </List>


        ) : (
          <List component="nav" aria-label="sidebar">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ListItem button>
                <ListItemIcon>
                  < LooksOneIcon  color="primary" />
                </ListItemIcon>
                <ListItemText className={classes.ItemText} primary="Section 1"/>
              </ListItem>

            </Link>

            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ListItem button>
                <ListItemIcon>
                  <LooksTwoIcon  color="primary" />
                </ListItemIcon>
                <ListItemText className={classes.ItemText} primary="Section 2" />
              </ListItem>
            </Link>

            <ListItem button onClick={scrollToTop}>
              <ListItemIcon>
                <ArrowUpwardIcon  color="primary" />
              </ListItemIcon>
              <ListItemText className={classes.ItemText} primary="scroll top"  />
            </ListItem>
          </List>
        )
      }
    </div>

  );
};
export default React.memo(SideBar)