import React, { FunctionComponent } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link, animateScroll as scroll } from "react-scroll";
import zIndex from '@material-ui/core/styles/zIndex';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';


//use scroll method from react-scroll for user to scroll up.
const scrollToTop = () => {
  scroll.scrollToTop();
};
//makeStyles hook from mui
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      display: "flex"
    },
    ItemText: {
      color: theme.palette.primary.main
    },
  }),
);

const MobileBar = ({ links }) => {
  const classes = useStyles()

  return (

    <div className={classes.root}>
      <List component="nav" aria-label="sidebar" >

        {links.map(({ id, section }) => (
          <Link
            activeClass="active"
            to={section}
            id={id}
            key={id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >

            <ListItem button>
              <ListItemIcon>
                < FiberManualRecordTwoToneIcon color="primary" />
              </ListItemIcon>
            </ListItem>

          </Link>
        ))}

        <ListItem button onClick={scrollToTop}>
          <ListItemIcon>
            <ArrowUpwardIcon color="primary"  className={classes.itemText} />
          </ListItemIcon>
        </ListItem>
      </List>
    </div>

  );
};
export default MobileBar

/*
{isMobile ?
        (

          <List component="nav" aria-label="sidebar" >
           <Link
              activeClass="active"
              to="/home/1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ListItem button>
                <ListItemIcon>
                  < LooksOneIcon  color="primary" />
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
                  < LooksTwoIcon  color="primary" />
                </ListItemIcon>

              </ListItem>

            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ListItem button>
                <ListItemIcon>
                  < Looks3Icon  color="primary" />
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
              offset={0}
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
                  <Looks3Icon  color="primary" />
                </ListItemIcon>
                <ListItemText className={classes.ItemText} primary="Section 3" />
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
*/