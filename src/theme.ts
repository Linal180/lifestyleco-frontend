import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#46A53D',
    },
    secondary: {
      main: '#f1f4f8',
    }
  },
  typography: {
    fontFamily: [
      '"Noto Nastaliq Urdu"',
      'sans-serif',
    ].join(','),
  },
});
