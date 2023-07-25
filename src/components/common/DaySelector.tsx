import { Box, Button, Card, FormControl, MenuItem, Select } from '@mui/material';
import { SetStateAction, useState } from 'react';

const DaySelector = () => {
  const [day, setDay] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setDay(event.target.value);
  }

  return (
    <Card>
      <Box py={1} display='flex' flexDirection='row-reverse' alignItems='center' justifyContent='center' gap={2} mx='auto'>
        <Button variant='contained' color='primary' size='medium'> دن منتحب کریں </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={day}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ textAlign: 'right', pr: '20px', }}
          >
            <MenuItem value=""> دن </MenuItem>
            <MenuItem value={1}>01</MenuItem>
            <MenuItem value={2}>02</MenuItem>
            <MenuItem value={3}>03</MenuItem>
            <MenuItem value={4}>04</MenuItem>
            <MenuItem value={5}>05</MenuItem>
            <MenuItem value={6}>06</MenuItem>
            <MenuItem value={7}>07</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Card>
  )
}

export default DaySelector;
