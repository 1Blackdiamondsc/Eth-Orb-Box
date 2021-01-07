import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#274268',
    },
    secondary: {
      main: '#1495CC',
      light: '#E6EFEC'
    },
   
    background: {
      default: '#E6EFEC',
      paper: '#274268',
    }

  },
  typography: {
    fontSize: 21,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontFamily: 'Linden Hill',
  },
});