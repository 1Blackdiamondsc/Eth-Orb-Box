import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',

    primary: {
      main:  '#E6EFEC',
      
    },

    secondary: {
      main: '#274268' ,
      light: '#1495CC'
    },

    background: {
      paper: '#274268',
    },

    info: {
      main: '#1495CC' 
    }

  },
  typography: {
    fontSize: 21,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontFamily: 'Linden Hill',

    subtitle2: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: 21
    },
    h1: {
      fontFamily: 'Linden Hill',
      fontSize: 50,
      fontWeight: 500,
      fontWeightLight: 300,
      fontWeightBold: 1000,
    },
    h2: {
      fontFamily: 'Linden Hill',
      fontSize: 30,
      fontWeight: 500,
      fontWeightLight: 300,
      fontWeightBold: 1000,
    },
    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: "1.3rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: "1.08rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    }
  },
});