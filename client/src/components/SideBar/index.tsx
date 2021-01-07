import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link, animateScroll as scroll } from "react-scroll";
import { BreakProps } from '../../interfaces/BreakProps/index' ;


//use scroll method from react-scroll for user to scroll up.
const scrollToTop = () => {
  scroll.scrollToTop();
};

const SideBar: FunctionComponent<BreakProps> = ({ isMobile }) => {
  return (
    <div>
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
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
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
                  <DraftsIcon />
                </ListItemIcon>

              </ListItem>
            </Link>

            <ListItem button onClick={scrollToTop}>
              <ListItemIcon>
                <DraftsIcon />
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
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Section 1" />
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
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Section 2" />
              </ListItem>
            </Link>

            <ListItem button onClick={scrollToTop}>
              <ListItemIcon>
                <ArrowUpwardIcon />
              </ListItemIcon>
              <ListItemText primary="scroll top" />
            </ListItem>
          </List>
        )
      }
    </div>

  );
};
export default React.memo(SideBar)