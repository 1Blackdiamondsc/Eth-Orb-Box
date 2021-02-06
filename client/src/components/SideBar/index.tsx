import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MobileBar from './MobileBar/index';
import DeskBar from './DeskBar/index';
//use scroll method from react-scroll for user to scroll up.

//makeStyles hook from mui
const useStyles = makeStyles((theme: Theme) =>
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

type Props = {
    isMobile: boolean,
    links: object[],

}
const SideBar: FunctionComponent<Props> = ({ isMobile, links }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {isMobile ?
        (
            <MobileBar links={links}/>
        ) : (
            <DeskBar links={links} />
        )
      }
    </div>

  );
};
export default SideBar