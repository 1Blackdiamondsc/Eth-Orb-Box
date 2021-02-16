import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link, animateScroll as scroll } from "react-scroll";
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
        },
        list: {
            maxWidth: "75%"
        },
    }),
);

const DeskBar = ({ links }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <List className={classes.list} component="nav" aria-label="sidebar" >
                {links.map(({ id, section, name }) => (
                    <Link
                        activeClass="active"
                        to={section}
                        id={id}
                        key={id}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                < FiberManualRecordTwoToneIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText color="primary"  primary={name} dense="true" />
                        </ListItem>

                    </Link>

                ))}

                <ListItem button onClick={scrollToTop}>
                    <ListItemIcon>
                        <ArrowUpwardIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText className={classes.ItemText} primary="scroll top" />
                </ListItem>
            </List>
        </div>

    );
};
export default DeskBar