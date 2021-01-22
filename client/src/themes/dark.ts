import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: '#1495CC'
    },
    secondary : {
      main:'#274268',
   
    },
 
    background: { 
      default: '#274268',
      paper: '#E6EFEC'
    }
  },
  typography: {
    fontSize: 21,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontFamily: 'Linden Hill',

    subtitle2: {
      fontFamily: 'arial',
      fontSize: 21
    }
  },
});