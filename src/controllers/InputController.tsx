
import { Box, InputAdornment, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { InputControllerProps } from '../interfaces';

import { VisibilityOff, Visibility } from '@mui/icons-material';

export const InputController: FC<InputControllerProps> = ({
  name, size, title, minRows, maxRows, disabled, fieldType = 'text', isPassword,
  isRequired, isMultiLine, placeholder, defaultValue, variant = 'standard',
  margin = 'dense', inputAdornmentIcon, StartIcon, readOnly
}) => {
  const [show, setShow] = useState<boolean>(false);
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { name, onBlur, onChange, value, ref } = field;
        const { error } = fieldState;
        const { message } = error || {};
        return (
          <TextField
            ref={ref} fullWidth name={name} size={size} value={value} margin={margin} onBlur={onBlur} maxRows={maxRows}
            minRows={minRows} variant={variant} autoComplete="off" disabled={disabled} onChange={onChange}
            helperText={message} error={Boolean(error)} multiline={isMultiLine} placeholder={placeholder}
            defaultValue={defaultValue} label={isRequired ? `${title} *` : title}
            type={isPassword ? (show ? 'text' : 'password') : fieldType}
            InputProps={{
              readOnly: readOnly,
              startAdornment: (
                <InputAdornment position="start">{StartIcon ? StartIcon : null}</InputAdornment>
              ),
              endAdornment: isPassword ? (
                <Box onClick={() => setShow(!show)}>
                  {show ? <VisibilityOff color="primary" /> : <Visibility color="primary" />}
                </Box>
              ) : (
                inputAdornmentIcon
              ),
            }}
          />
        );
      }}
    />
  );
};
