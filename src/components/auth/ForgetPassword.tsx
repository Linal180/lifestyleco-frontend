import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import Input from '../common/Input';
// component

const ForgetPassword = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh' width='100vw'>
      <Box
        display='flex' flexDirection='column' alignItems='center' justifyContent='center'
        width={400} margin='auto' p={3} borderRadius={5} boxShadow='5px 5px 10px #ccc'
      >
        <Typography variant='h3' p={3} textAlign='center'>
          Reset
        </Typography>

        <form>
          <Input type="password" id="password" placeholder="New Password" />
          <Input type="password" id="confirmPassword" placeholder="Confirm Password" />

          <Button type="submit" variant='contained' size='large' fullWidth sx={{ mt: 5 }}>
            Submit
          </Button>
        </form>

        <Box display='flex' justifyContent='flex-end' mt={2}>
          <Typography variant="body2" color="initial">
            Don't have an Account? &nbsp;
            <Link to='/'>Sign Up</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ForgetPassword;
