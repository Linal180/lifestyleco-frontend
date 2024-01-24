
import { Box, Card } from '@mui/material';
import DaysOptions from './DayOptions';

const DaySelector = () => {
  return (
    <Card>
      <Box py={1} display='flex' flexDirection='row-reverse' alignItems='center' justifyContent='space-between' gap={2}>
        <DaysOptions />

        <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=923334371715" style={{ textDecoration: 'none', marginLeft: '10px' }}>
          <Box
            sx={{ backgroundColor: '#46A53D', color: '#fff', width: '200px', height: '40px', fontSize: '30px', borderRadius: '50px', textAlign: 'center', boxShadow: '2px 2px 3px #999', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <p style={{ marginRight: '10px', fontSize: '16px', fontWeight: '600' }}>رابطہ کریں</p>
            <i className="fa fa-whatsapp"></i>
          </Box>
        </a>
      </Box>
    </Card>
  )
}

export default DaySelector;
