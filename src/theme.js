// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff', // white background
    },
    primary: {
      main: '#D81B60', // pink tone (TWICE theme)
    },
    secondary: {
      main: '#6A1B9A', // purple accent
    },
    text: {
      primary: '#4A148C',
      secondary: '#6D6D6D',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: 1,
    },
  },
});

export default theme;
