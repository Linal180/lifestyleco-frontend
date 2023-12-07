import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Box, ThemeProvider } from '@mui/material';

import RouteComponent from './components/routes';

import { theme } from './theme';
import { toastStyle } from './styles/toast';
import { AuthContextProvider } from './context/auth';

export default function App() {
  

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Box sx={{ width: '100%', maxWidth: '992px', mx: 'auto' }}>
            <Toaster toastOptions={toastStyle} />
            <RouteComponent />
          </Box>
        </AuthContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
