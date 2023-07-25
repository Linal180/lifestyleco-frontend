import { useState } from 'react';

import { Box, Card, } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import { EducationData } from '../../../data/Education';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const Education = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeAccord = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Card>
      <Box p={2}>
        <Typography variant="h6" fontWeight={600} color="initial" textAlign="right">: تعلیم </Typography>
        <Box p={1} />

        {EducationData.map((item, index) => {
          const { title, description } = item;

          return (
            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChangeAccord(`panel${index}`)} style={{ marginBottom: '10px' }}>
              <AccordionSummary aria-controls={`panel${index}bh-content`} id={`panel${index}bh-header`}>
                <Box sx={{ width: '100%' }}>
                  <Typography variant="body1" textAlign="right" sx={{ fontWeight: 'bold', mr: '10px' }}>{title}</Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="body1" color="inherit" textAlign="right">
                  {description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Card>
  )
}

export default Education;
