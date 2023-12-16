import { FC } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { TOTAL_EXERCISES } from '../../constants';

export type ChartProps = {
  completed: number
}
const Chart: FC<ChartProps> = ({ completed }) => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: completed, label: 'Completed' },
            { id: 1, value: TOTAL_EXERCISES - completed, label: 'No Completed' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}

export default Chart;