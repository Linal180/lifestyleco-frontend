import { FC, useState, SyntheticEvent, useContext } from "react"
import toast from "react-hot-toast"
import { CheckCircleOutline } from "@mui/icons-material"
import { Accordion, AccordionSummary, Box, Typography, Button, AccordionDetails } from "@mui/material"

import { apiPost } from "../../axois"
import { getVideoURL } from "../../utils"
import { ApiStatus, ExerciseProps } from "../../interfaces"
import { AuthContext } from "../../context/auth"

const ExerciseComponent: FC<ExerciseProps> = ({ exercise }) => {
  const { id, title, description, require, perform, video } = exercise;
  const { completedExercises, getUserExercises } = useContext(AuthContext);
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleComplete = async (id: string) => {
    try {
      const { statusCode } = await apiPost<ApiStatus>('/exercise/status/update', {
        status: 1, exercise_id: id
      });

      if (statusCode === 200 || statusCode === 201) {
        toast.success('Exercise status updated successfully!');
        getUserExercises();
      }
    } catch (error) {
      toast.error('Failed to update exercise status');
    }
  }

  const handleChangeAccord = (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion key={id} expanded={expanded === `panel${id}`} onChange={handleChangeAccord(`panel${id}`)} sx={{ mb: '10px' }}>
      <AccordionSummary aria-controls={`panel${id}bh-content`} id={`panel${id}bh-header`}>
        <Box width='100%' display='flex' flexDirection='row-reverse' justifyContent='space-between' alignItems='center' gap={2} flexWrap='wrap'>
          <Typography variant="body1" sx={{ fontWeight: 'bold', mr: '10px' }}>{title}</Typography>

          {completedExercises.includes(id.toString()) ? (
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
          <video width="100%" height="100%" style={{ aspectRatio: '4:3' }} controls autoPlay muted>
            <source src={getVideoURL(video)} type="video/mp4" />
          </video>

          {completedExercises.includes(id.toString()) ? (<></>) : (
            <Box mt={2} mb={3} width="300px" mx="auto">
              <Button onClick={() => handleComplete(id)} variant="outlined" color="success"
                size="large" fullWidth endIcon={<CheckCircleOutline />}> مکمل کر لی </Button>
            </Box>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default ExerciseComponent;
