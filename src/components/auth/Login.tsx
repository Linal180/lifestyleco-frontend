import { Box, Button, Typography } from '@mui/material';
// component
import { Link } from 'react-router-dom';
import Input from '../common/Input';

const Login = () => {
  return (
    <Box
      display='flex' flexDirection='column' alignItems='center' justifyContent='center'
      maxWidth="600px" my={3} mx='auto' p={3} borderRadius={5} boxShadow='5px 5px 10px #ccc'
    >
      <Typography variant='h4' textAlign='center'>
        Sign In
      </Typography>

      <form>
        <Input type="tel" id="phone" placeholder="Phone Number" />
        <Input type="password" id="password" placeholder="Password" />

        <Link to='/' style={{ color: 'white' }}>
          <Button type="submit" variant='contained' size='large' fullWidth sx={{ mt: 5, fontWeight: 'bold', fontSize: '1rem' }}>
            Sign In
          </Button>
        </Link>
      </form>

      <Box display='flex' justifyContent='flex-end' mt={2}>
        <Typography variant="body2" color="initial">
          Don't have an Account? &nbsp;
          <Link to='/register'>Register</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Login;
