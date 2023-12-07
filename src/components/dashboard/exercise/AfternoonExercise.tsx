import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AxiosResponse } from 'axios';
import { Box, Card } from '@mui/material';
import Typography from '@mui/material/Typography';

import Loader from '../../common/Loader';
import ExerciseComponent from '../../common/Exercise';

import { apiGet } from '../../../axois';
import { Exercise } from '../../../interfaces';

const AfternoonExercise = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [completed, setCompleted] = useState<number[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const getAfternoonExercises = useCallback(async () => {
    try {
      const { data } = await apiGet<AxiosResponse>('/exercise/afternoon');

      if (data) {
        setExercises(data);
        setCompleted([])
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error("Failed to load exercises");
    }
  }, [])

  useEffect(() => {
    getAfternoonExercises()
  }, [getAfternoonExercises]);

  return (
    <Card>
      <Box p={2}>
        <Typography variant="h6" fontWeight={600} textAlign="right" color="initial">:  ورزش </Typography>
        <Box p={1} />

        {loading ? <Loader /> :
          exercises.map((exercise, index) =>
            <ExerciseComponent
              key={index}
              exercise={exercise}
              completed={completed}
            />
          )}
      </Box>
    </Card>
  )
}

export default AfternoonExercise;
