import { Box, Button, CardActions, CardContent, Collapse, Divider, Grid, Paper, Typography } from "@mui/material";
import { FC, useCallback, useEffect, useState } from "react"
import Chart from "./Chart";
import { Exercise, UserDetailProps } from "../../interfaces";
import { AxiosResponse } from "axios";
import { apiGet } from "../../axois";
import { CancelOutlined, CheckCircleOutline } from "@mui/icons-material";

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
      {users.map((user) => {
        const { user_id, name, completed_exercises } = user;
        const { all } = completed_exercises;
          return <Grid item xs={12}>
            <Paper key={`states-${user_id}`} sx={{ px: '20px', pb: '10px' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography variant="h5" sx={{ color: '#46a53d', fontWeight: '600' }}>
                    {name}
                  </Typography>
                    
                  <Chart completed={all.length} />
                </Box>
              </CardContent>

              <CardActions sx={{ marginTop: '-20px' }}>
                <Button size="small" variant="contained" color="primary"
                  sx={{ letterSpacing: '0.5px', fontWeight: '300' }}
                  onClick={() => setSelected(selected === user_id ? '' : user_id)}>
                    Click to See Details
                </Button>
              </CardActions>
            </Paper>

            <Collapse unmountOnExit mountOnEnter in={selected === user_id}>
              {exercises.map(({ id, title }, index) =>
              <Box bgcolor="white">
                {index === 0 && 
                  <Box sx={{backgroundColor:'#d7ebdc',textAlign:'center',paddingBottom:'10px'}}>
                    <Typography className="">صبح</Typography>
                  </Box>
                }

                {index === 3 && 
                  <Box sx={{backgroundColor:'#d7ebdc',textAlign:'center',paddingBottom:'10px'}}>
                    <Typography className="">دوپہر</Typography>
                  </Box>
                }

                {index === 11 && 
                  <Box sx={{backgroundColor:'#d7ebdc',textAlign:'center',paddingBottom:'10px'}}>
                    <Typography className="">شام</Typography>
                  </Box>
                }

                <Box width='100%' display='flex' flexDirection='row-reverse' justifyContent='flex-start' alignItems='center' gap={2} flexWrap='wrap'>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', pl: '10px', pr: '30px' }}>
                      <span>{title}</span>
                  </Typography>

                  {all.includes(id.toString()) ? (
                    <Button variant="contained" color="success" size="medium" endIcon={<CheckCircleOutline />}> مکمل </Button>
                  ) : (
                    <Button variant="contained" color="error" size="medium" endIcon={<CancelOutlined />}> نا مکمل </Button>
                  )}

                  <Box my={5}>
                    <Divider />
                  </Box>
                </Box>
              </Box>
              )}
            </Collapse>
          </Grid>
        })
      }
    </Grid>
  );
}

export default UserDetail;
