import React, { useEffect } from 'react';
import { theme } from './theme';
import { Box, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENTS
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NoPage from './components/common/NoPage';
import EveningComponent from './components/dashboard/Evening';
import MorningComponent from './components/dashboard/Morning';
import AfternoonComponent from './components/dashboard/Afternoon';
import RegisterComponent from './components/auth/Register';
import LoginComponent from './components/auth/Login';
import { getAdminAccount, setAdminAccount } from './utils';
import { toastStyle } from './styles/toast';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const adminInfo = getAdminAccount();
  
  useEffect(() => {
    if(!adminInfo){
      setAdminAccount()
    }
  }, [adminInfo]);
  
  return (
    <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', maxWidth: '992px', mx: 'auto' }}>
      <Toaster toastOptions={toastStyle} />
      
        <Router>
          <Header />

          <Box sx={{ position: 'absolute', backgroundColor: '#f1f4f8', width: '100%', maxWidth: '992px', height: 'calc(100vh - 120px)', top: '60px', overflowY: 'scroll', }}>
            <Routes>
              <Route index path='/register' element={<RegisterComponent />} />
              <Route index path='/login' element={<LoginComponent />} />
              <Route index path='/' element={<MorningComponent />} />
              <Route path='/afternoon' element={<AfternoonComponent />} />
              <Route path='/evening' element={<EveningComponent />} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          </Box>

          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  </React.StrictMode>
  );
}