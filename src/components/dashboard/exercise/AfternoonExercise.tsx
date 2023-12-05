import { useCallback, useEffect, useState } from 'react';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import { Box, Button, Card, } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { AxiosResponse } from 'axios';
import toast from 'react-hot-toast';
import { apiGet } from '../../../axois';
import { Exercise } from '../../../interfaces';
import { getVideoURL } from '../../../utils';

const AfternoonExercise = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [completed, setCompleted] = useState(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const getAfternoonExercises = useCallback(async () => {
    try {
      const { data } = await apiGet<AxiosResponse>('/exercise/afternoon');

      if (data) {
        setExercises(data);
      }
    } catch (error) {
      toast.error("Failed to load exercises");
    }
  }, [])

  useEffect(() => {
    getAfternoonExercises()
  }, [getAfternoonExercises]);

  const handleChangeAccord = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card>
      <Box p={2}>
        <Typography variant="h6" fontWeight={600} textAlign="right" color="initial">:  ورزش </Typography>
        <Box p={1} />

        {exercises.map((item, index) => {
          const { title, description, require, perform, video } = item;

          return (
            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChangeAccord(`panel${index}`)} sx={{ mb: '10px' }}>
              <AccordionSummary aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
                <Box width='100%' display='flex' flexDirection='row-reverse' justifyContent='space-between' alignItems='center' gap={2} flexWrap='wrap'>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', mr: '10px' }}>{title}</Typography>

                  {completed ? (
                    <Button variant="contained" color="success" size="medium" endIcon={<CheckCircleOutline />}> مکمل </Button>
                  ) : (<></>)}
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="h5" textAlign="right" sx={{ fontWeight: 'bold' }} color="initial">: تفصیلات </Typography>

                <Box display='flex' alignItems='center' justifyContent='end' flexWrap='wrap' gap={2} my={2}>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', lineHeight: 'normal', fontWeight: 'bold' }}>{perform}</Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '50px', lineHeight: 'normal', fontWeight: 'bold' }}>{require}</Button>
                </Box>

                <Typography variant="h5" textAlign="right" sx={{ fontWeight: 'bold' }} color="initial">: ہدایات </Typography>
                <Box p={1}>
                  <Typography variant="body1" color='inherit' textAlign='right'>
                    {description}
                  </Typography>
                </Box>

                <Box mx='auto' textAlign='center'>
                  <video width="100%" height="100%" style={{ aspectRatio: "16/9" }} controls autoPlay muted>
                    <source src={getVideoURL(video)} type="video/mp4" />
                  </video>

                  {completed ? (<></>) : (
                    <Box mt={2} mb={3} width="300px" mx="auto">
                      <Button onClick={() => setCompleted(!completed)} variant="outlined" color="success"
                        size="large" fullWidth endIcon={<CheckCircleOutline />}> مکمل کر لی </Button>
                    </Box>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Card>
  )
}

export default AfternoonExercise;
