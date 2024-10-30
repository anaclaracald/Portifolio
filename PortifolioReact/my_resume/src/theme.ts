import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#9d4edd',
    },
    secondary: {
      main: '#e0aaff',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeightLight: 200,
  }
});

theme = responsiveFontSizes(theme);
export default theme;