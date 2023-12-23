import { Box, Button, Card, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { SetStateAction, useState } from 'react';

const DaySelector = () => {
  const [day, setDay] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setDay(event.target.value);
  }

  return (
    <Card>
      <Box py={1} display='flex' flexDirection='row-reverse' alignItems='center' justifyContent='space-between' gap={2}>
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

        <a target="_blank" href="https://api.whatsapp.com/send?phone=923334371715" style={{ textDecoration: 'none', marginLeft: '10px' }}>
          <Box 
            sx={{ backgroundColor: '#46A53D', color: '#fff', width: '200px', height: '40px', fontSize:'30px', borderRadius: '50px', textAlign: 'center', boxShadow: '2px 2px 3px #999', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <p style={{ marginRight: '10px', fontSize: '16px', fontWeight: '600' }}>رابطہ کریں</p>
            <i className="fa fa-whatsapp"></i>
          </Box>
        </a>
      </Box>
    </Card>
  )
}

export default DaySelector;
