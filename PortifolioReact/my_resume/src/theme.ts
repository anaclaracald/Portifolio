import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#9a8c98',
    },
    secondary: {
      main: '#246a73',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 200,
  }
});

theme = responsiveFontSizes(theme);
export default theme;