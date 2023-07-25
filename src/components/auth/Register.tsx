// Packages
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import Input from '../common/Input';
// component

const Register = () => {
  return (
    <Box
      display='flex' flexDirection='column' alignItems='center' justifyContent='center'
      maxWidth="600px" my={3} mx='auto' p={3} borderRadius={5} boxShadow='5px 5px 10px #ccc'
    >
      <Typography variant='h4' textAlign='center'>
        Sign Up
      </Typography>

      <form>
        <Input type="text" id="username" placeholder="Full Name" />
        <Input type="tel" id="phone" placeholder="Phone Number" />
        <Input type="password" id="password" placeholder="Password" />

        <Link to='/login' style={{ color: 'white' }}>
          <Button type="submit" variant='contained' size='large' fullWidth sx={{ mt: 5, fontWeight: 'bold', fontSize: '1rem' }}>
            Sign Up
          </Button>
        </Link>
      </form>

      <Box display='flex' justifyContent='flex-end' mt={2}>
        <Typography variant="body2" color="initial">
          Already have an Account? &nbsp;
          <Link to='/login'>Login</Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default Register;
