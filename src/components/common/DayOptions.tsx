import { useState, useContext, useEffect } from 'react';
import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { AuthContext } from '../../context/auth/index';

const DaysOptions = () => {
  const { currentDay, setCurrentDay } = useContext(AuthContext)
  const days = [<MenuItem value=""> دن </MenuItem>];
  const [day, setDay] = useState('');

  useEffect(() => {
    setDay(currentDay)
  }, [currentDay])

  const handleChange = ({ target: { value } }: SelectChangeEvent<string>) => {
    setCurrentDay(value)
  }

  for (let i = 1; i <= 60; i++) {
    days.push(
      <MenuItem key={i} value={i.toString()}>
        {i}
      </MenuItem>
    );
  }

  return (
    <Box display='flex' flexDirection='row-reverse' alignItems='center' gap={2} mx={2}>
      <Button variant='contained' color='primary' size='medium'> دن منتحب کریں </Button>
      <FormControl sx={{ m: 1, minWidth: 120, maxHeight: '50px' }}>
        <Select
          value={day}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ textAlign: 'right', pr: '20px', pb: '10px', maxHeight: '40px' }}
        >
          {days}
        </Select>
      </FormControl>
    </Box>
  )
}

export default DaysOptions;
