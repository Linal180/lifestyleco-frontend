import { SetStateAction, useState } from 'react';
import { AccountCircle, WhatsApp } from '@mui/icons-material';
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event: { currentTarget: SetStateAction<null>; }) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '992px', height: '60px', position: 'fixed', top: '0px', zIndex: 10, }}>
      <AppBar position="static" sx={{ backgroundColor: '#46A53D' }}>
        <Container>
          <Toolbar disableGutters>
            <Box width='100%' display='flex' justifyContent='space-between' alignItems='center'>
              <Typography
                variant="h6"
                fontWeight="bold"
              >
                LIFESTYLECO
              </Typography>

              <Box display='flex' alignItems='center' gap='2'>
                <a title='Click to Chat' href="https://api.whatsapp.com/send?phone=923334371715" target="_blank" rel="noreferrer">
                  <IconButton sx={{ p: 0 }}>
                    <WhatsApp fontSize='large' sx={{ color: 'white' }} />
                  </IconButton>
                </a>

                <Box ml={2} display="none">
                  <Tooltip title="Open settings">
                    <IconButton onClick={() => handleOpenUserMenu} style={{ padding: 0 }}>
                      <AccountCircle sx={{ color: 'white' }} />
                    </IconButton>
                  </Tooltip>

                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header;
