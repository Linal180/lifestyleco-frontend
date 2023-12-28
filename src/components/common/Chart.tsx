import { FC } from 'react';
import { TOTAL_EXERCISES } from '../../constants';
import { Box, Typography } from '@mui/material';

export type ChartProps = {
  completed: number
}
const Chart: FC<ChartProps> = ({ completed }) => {
  return (
    <>
      {/* <PieChart
        series={[
          {
            data: [
              { id: 0, value: completed, label: 'Completed' },
              { id: 1, value: TOTAL_EXERCISES - completed, label: 'No Completed' },
            ],
          },
        ]}
        width={200}
        height={100}
      /> */}

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body1" sx={{ fontWeight: '600' }}>
          Completed : 
          <span style={{ color: '#46a53d', marginLeft: '10px' }}>{completed}</span>
        </Typography>

        <Typography variant="body1" sx={{ fontWeight: '600' }}>
          Incompleted : 
          <span style={{ color: 'red', marginLeft: '10px' }}>{TOTAL_EXERCISES - completed}</span>
        </Typography>
      </Box>
      
      {/* <LinearProgress variant="determinate" value={Math.round((completed / TOTAL_EXERCISES) * 100)} /> */}
    </>
  );
}

export default Chart;
