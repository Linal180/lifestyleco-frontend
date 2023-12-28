import { LogoutOutlined } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { TOKEN } from '../../constants';
import { getToken } from '../../utils';
import Logo from '../../assets/images/logo.png';

const Header = () => {

  const handleLogout = () => {
    localStorage.removeItem(TOKEN);

    window.location = "/login" as unknown as Location
  }

  const token = getToken()

  return (
    <>
      {token &&
        <Box sx={{ width: '100%', maxWidth: '992px', height: '60px', position: 'fixed', top: '0px', zIndex: 10, }}>
          <AppBar position="static" sx={{ backgroundColor: '#46A53D' }}>
            <Container>
              <Toolbar disableGutters>
                <Box width='100%' display='flex' justifyContent='space-between' alignItems='center'>
                  <img src={Logo} alt="logo" width="240px" height="auto" />

                  <Button variant="contained" onClick={() => handleLogout()} color='secondary' startIcon={<LogoutOutlined />}>
                    <p style={{ margin: '0px', fontWeight: 'bold' }}>Signout</p>
                  </Button>
                </Box>

              </Toolbar>
            </Container>
          </AppBar>
        </Box>
      }
    </>
  )
}

export default Header;
