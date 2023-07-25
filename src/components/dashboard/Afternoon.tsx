import { Box } from '@mui/material';
// COMPONENTS
import Education from './education';
import FoodAllowed from './food/FoodAllowed';
import FoodNotAllowed from './food/FoodNotAllowed';
import AfternoonExercise from './exercise/AfternoonExercise';
import DaySelector from '../common/DaySelector';
import AfternoonChart from './nutrition/AfternoonChart';

const AfternoonComponent = () => {
  return (
    <Box p={2}>
      <DaySelector />
      <Box m={2} />
      <AfternoonExercise />
      <Box m={2} />
      <Education />
      <Box m={2} />
      <AfternoonChart />
      <Box m={2} />
      <FoodAllowed />
      <Box m={2} />
      <FoodNotAllowed />
      <Box m={2} />
    </Box>
  )
}

export default AfternoonComponent;
