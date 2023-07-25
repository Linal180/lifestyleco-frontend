import { TextField, } from '@mui/material';
import { FC } from 'react';
import { InputProps } from '../../interfaces';

const Input: FC<InputProps> = ({ id, placeholder, type, register, errorMessage }) => {
  return (
    <TextField
      type={type} id={id} placeholder={placeholder} {...register} helperText={errorMessage}
      variant='outlined' margin='normal' fullWidth error={!!errorMessage}
    />
  )
}

export default Input;
