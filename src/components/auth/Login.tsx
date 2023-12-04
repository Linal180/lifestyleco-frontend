import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from '@mui/material';
// component
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, SubmitHandler, useForm, } from "react-hook-form";
import { LoginInputs } from "../../interfaces";
import { loginSchema } from "../../validations";
import { InputController } from "../../controllers/InputController";
import { EMAIL, PASSWORD } from "../../constants";
import { checkCredentials } from "../../utils";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const methods = useForm<LoginInputs>({
    mode: "all",
    resolver: yupResolver(loginSchema)
  });

  const { handleSubmit, setValue } = methods

  const onSubmit: SubmitHandler<LoginInputs> = async (inputs) => {
    const passed = checkCredentials(inputs);

    if(passed){
      toast.success('Logged in successfully!');
      navigate('/');
    } else {
      toast.error('Email or password incorrect');
      setValue('password', '')
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
          {/* <Input type="tel" id="phone" placeholder="Phone Number" />
        <Input type="password" id="password" placeholder="Password" /> */}

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
