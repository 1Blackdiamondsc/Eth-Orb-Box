import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Layout(props) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {props.children}
    </Container>
  );
}

/*
//Top level layout
export const Layout = (props) => (
  <Styles>
    <Container className='containerStyles'>
      {props.children}
    </Container>
  </Styles>
)

export const BgLayout = (props) => (
  <Styles>
    <Container fluid className='bgStyles'>
      {props.children}
    </Container>
  </Styles>
)

export const TextContainer = (props) => (
  <Container text textAlign='center' className='txtContainer'>
    {props.children}
  </Container>
)

export const SegmentHorz = (props) => (
  <Segment.Group horizontal>
    {props.children}
  </Segment.Group>
)

*/