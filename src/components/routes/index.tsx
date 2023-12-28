import { useContext } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../common/Header';
import Footer from '../common/Footer';
import NoPage from '../common/NoPage';
import AdminDashboard from '../dashboard/admin';
import EveningComponent from '../dashboard/Evening';
import MorningComponent from '../dashboard/Morning';
import AfternoonComponent from '../dashboard/Afternoon';
import { RegisterComponent, LoginComponent } from '../auth';

import { getToken } from '../../utils';
import { AuthContext } from '../../context/auth';

const RouteComponent = () => {
  const { role } = useContext(AuthContext);
  const token = getToken();

  return (
    <Router>
      <Header />

      <Box sx={{ position: 'absolute', backgroundColor: '#f1f4f8', width: '100%', maxWidth: '992px', height: 'calc(100vh - 120px)', top: '60px', overflowY: 'scroll', }}>
        <Routes>
          {token ? <>
            {
              role === 'admin'
              // role === 'admin' || true
              ? <Route index path='/' element={<AdminDashboard />} />
              : <>
                <Route path='/afternoon' element={<AfternoonComponent />} />
                <Route path='/evening' element={<EveningComponent />} />
                <Route index path='/' element={<MorningComponent />} />
              </>
            }
          </> : <>
            <Route index path='/register' element={<RegisterComponent />} />
            <Route index path='/login' element={<LoginComponent />} />
            <Route index path='/' element={<LoginComponent />} />
          </>}
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Box>

      {(token || role === 'user')  &&  <Footer />}
    </Router>
  )
}

export default RouteComponent;
