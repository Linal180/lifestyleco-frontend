import { Box } from '@mui/material';
// COMPONENTS
import Education from './education';
import FoodAllowed from './food/FoodAllowed';
import FoodNotAllowed from './food/FoodNotAllowed';
import EveningChart from './nutrition/EveningChart';
import EveningExercise from './exercise/EveningExercise';
import DaySelector from '../common/DaySelector';

const EveningComponent = () => {
  return (
    <Box p={2}>
      <DaySelector />
      <Box m={2} />
      <EveningExercise />
      <Box m={2} />
      <Education />
      <Box m={2} />
      <EveningChart />
      <Box m={2} />
      <FoodAllowed />
      <Box m={2} />
      <FoodNotAllowed />
      <Box m={2} />
    </Box>
  )
}

export default EveningComponent;
