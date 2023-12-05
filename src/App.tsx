import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Box, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NoPage from './components/common/NoPage';
import LoginComponent from './components/auth/Login';
import RegisterComponent from './components/auth/Register';
import EveningComponent from './components/dashboard/Evening';
import MorningComponent from './components/dashboard/Morning';
import AfternoonComponent from './components/dashboard/Afternoon';

import { theme } from './theme';
import { getToken } from './utils';
import { toastStyle } from './styles/toast';
import { AuthContextProvider } from './context/auth';

export default function App() {
  const token = getToken();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Box sx={{ width: '100%', maxWidth: '992px', mx: 'auto' }}>
            <Toaster toastOptions={toastStyle} />

            <Router>
              <Header />

              <Box sx={{ position: 'absolute', backgroundColor: '#f1f4f8', width: '100%', maxWidth: '992px', height: 'calc(100vh - 120px)', top: '60px', overflowY: 'scroll', }}>
                <Routes>
                  {token ? <>
                    <Route path='/afternoon' element={<AfternoonComponent />} />
                    <Route path='/evening' element={<EveningComponent />} />
                    <Route index path='/' element={<MorningComponent />} />
                  </> : <>
                    <Route index path='/register' element={<RegisterComponent />} />
                    <Route index path='/login' element={<LoginComponent />} />
                    <Route index path='/' element={<LoginComponent />} />
                  </>}
                  <Route path='*' element={<NoPage />} />
                </Routes>
              </Box>

              <Footer />
            </Router>
          </Box>
        </AuthContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
