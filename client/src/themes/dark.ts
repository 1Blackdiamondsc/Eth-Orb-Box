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
    //hex for box div in App/index
    background: { 
      default: '#274268'
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