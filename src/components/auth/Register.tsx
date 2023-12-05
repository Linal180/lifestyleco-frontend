// Packages
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { InputController } from '../../controllers/InputController';
import { EMAIL, PASSWORD, TOKEN } from '../../constants';
import { LoginResponse, RegisterInputs } from '../../interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import toast from 'react-hot-toast';
import { apiPost } from '../../axois';
import { registerSchema } from '../../validations';

const Register = () => {
  const methods = useForm<RegisterInputs>({
    mode: "all",
    resolver: yupResolver(registerSchema)
  });

  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<RegisterInputs> = async ({ email, password, name }) => {
    toast.loading('Logging you in...');

    try {
      const { token } = await apiPost<LoginResponse>('/register', {
        email, password, name
      });

      setTimeout(() => {
        toast.dismiss();
        if (token) {
          toast.success('User is registered successfully!');
          localStorage.setItem(TOKEN, token)
          window.location = '/' as unknown as Location
        }
      }, 1500)
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to register user');
    }
  }

  return (
    <Box
      display='flex' flexDirection='column' alignItems='center' justifyContent='center'
      maxWidth="600px" my={3} mx='auto' p={3} borderRadius={5} boxShadow='5px 5px 10px #ccc'
    >
      <Typography variant='h4' textAlign='center'>
        Sign Up
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputController
            name='name'
            isRequired
            title="Name"
          />

          <InputController
            name='email'
            isRequired
            title={EMAIL}
          />

          <InputController
            name='password'
            isRequired
            isPassword
            title={PASSWORD}
          />

          <Button type="submit" variant='contained' size='large' fullWidth sx={{ mt: 5, fontWeight: 'bold', fontSize: '1rem' }}>
            Sign Up
          </Button>
        </form>
      </FormProvider>

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
