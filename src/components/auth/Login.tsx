import toast from "react-hot-toast";
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from '@mui/material';
import { FormProvider, SubmitHandler, useForm, } from "react-hook-form";

import { InputController } from "../../controllers/InputController";

import { apiPost } from "../../axois";
import { loginSchema } from "../../validations";
import { EMAIL, PASSWORD, TOKEN } from "../../constants";
import { LoginInputs, LoginResponse } from "../../interfaces";

const Login = () => {
  const methods = useForm<LoginInputs>({
    mode: "all",
    resolver: yupResolver(loginSchema)
  });

  const { handleSubmit, setValue } = methods

  const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
    toast.loading('Logging you in...');

    try {
      const { token } = await apiPost<LoginResponse>('/login', {
        email, password
      });

      setTimeout(() => {
        if (token) {
          toast.success('Logged in successfully!');
          localStorage.setItem(TOKEN, token)
          window.location = '/' as unknown as Location
        }
      }, 1500)
    } catch (error) {
      toast.dismiss();
      setValue('password', '')
      toast.error('Email or password incorrect');
    }
  }

  return (
    <Box
      display='flex' flexDirection='column' alignItems='center' justifyContent='center'
      maxWidth="600px" my={3} mx='auto' p={3} borderRadius={5} boxShadow='5px 5px 10px #ccc'
    >
      <Typography variant='h4' textAlign='center'>
        Sign In
      </Typography>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            Sign In
          </Button>
        </form>
      </FormProvider>

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
