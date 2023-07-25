import { Box } from '@mui/material';
// COMPONENTS
import Education from './education';
import FoodAllowed from './food/FoodAllowed';
import FoodNotAllowed from './food/FoodNotAllowed';
import MorningChart from './nutrition/MorningChart';
import MorningExercise from './exercise/MorningExercise';

const DashboardComponent = () => {
  return (
    <Box px={2}>
      <MorningExercise />
      <Box m={2} />
      <Education />
      <Box m={2} />
      <MorningChart />
      <Box m={2} />
      <FoodAllowed />
      <Box m={2} />
      <FoodNotAllowed />
      <Box m={2} />
    </Box>
  )
}

export default DashboardComponent;
