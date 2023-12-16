import { Box, Button, Collapse, Divider, Grid, Paper, Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react"
import Chart from "./Chart";
import { Exercise, UserDetailProps } from "../../interfaces";
import { AxiosResponse } from "axios";
import { apiGet } from "../../axois";
import { CheckCircleOutline } from "@mui/icons-material";

const UserDetail: FC<UserDetailProps> = ({ users }) => {
  const [selected, setSelected] = useState<string>('')
  const [exercises, setExercises] = useState<Exercise[]>([])

  const getExercises = useCallback(async () => {
    try {
      const { data } = await apiGet<AxiosResponse>('/exercise/all');

      if (data) {
        setExercises(data);
      }

    } catch (error) {
    }
  }, [])

  useEffect(() => {
    getExercises()
  }, [getExercises]);

  return (
    <Grid container spacing={2}>
      <Grid item lg={12} gap={5}>
        {users.map((user) => {
          const { user_id, email, name, overall_completion_percentage, completed_exercises } = user;
          const { all } = completed_exercises;
          
          return <Paper key={`states-${user_id}`} variant="outlined" sx={{ p: 3, mb: 3 }}>
            <Grid container alignItems="center" onClick={() => setSelected(selected === user_id ? '' : user_id)}>
              <Grid item lg={6}>
                <Typography variant="h5">
                  <strong>{name}</strong>
                </Typography>

                <Typography variant="caption" color="textSecondary">
                  {email}
                </Typography>
              </Grid>

              <Grid item lg={6} sx={{ textAlign: 'center' }}>
                <Chart completed={overall_completion_percentage} />
              </Grid>
            </Grid>

            <Collapse unmountOnExit mountOnEnter in={selected === user_id}>
              {exercises.map(({ id, title }) =>
                <Box width='100%' display='flex' flexDirection='row-reverse' justifyContent='space-between' alignItems='center' gap={2} flexWrap='wrap'>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mr: '10px' }}>{title}</Typography>

                  {all.includes(id.toString()) ? (
                    <Button variant="contained" color="success" size="medium" endIcon={<CheckCircleOutline />}> مکمل </Button>
                  ) : (<></>)}

                  <Box my={5}>
                    <Divider />
                  </Box>
                </Box>
              )}
            </Collapse>
          </Paper>
        })}
      </Grid>
    </Grid>
  );
}

export default UserDetail;
