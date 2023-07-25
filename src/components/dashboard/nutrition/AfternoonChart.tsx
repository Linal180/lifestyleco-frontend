import { useState } from 'react';
import { LunchData } from '../../../data/Diet';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Card, CardContent, CardMedia, Checkbox, FormControlLabel, Grid } from '@mui/material';

const AfternoonChart = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeAccord =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Card>
      <Box p={2}>
        <Typography variant="h6" fontWeight={600} color="initial" textAlign="right">: غذائیت (خوراک کا چارٹ) </Typography>
        <Box p={1} />

        <Accordion expanded={expanded === 'panelNutrition'} onChange={handleChangeAccord('panelNutrition')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panelNutrition-content"
            id="panelNutrition-header"
          >
            <Box sx={{ width: '100%' }}>
              <Typography variant="body1" textAlign="right" sx={{ fontWeight: 'bold', mr: '10px' }}> دوپہر کا کھانا </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={2}>
              {LunchData.map((item, index) => {
                const { description, image, text } = item;
                return (
                  <Grid item key={index} xs={12} sm={12}>
                    <Card sx={{ maxWidth: "100%", borderRadius: '10px' }}>
                      <CardContent>
                        <Box display='flex' flexDirection='row-reverse' alignItems='baseline'>
                          <FormControlLabel label='' control={<Checkbox color="primary" />} sx={{ marginRight: 0 }} />
                          <Typography variant="h6" color="initial" textAlign="right" sx={{ mr: '10px' }}> {description} </Typography>
                        </Box>
                      </CardContent>

                      <CardMedia
                        sx={{ height: 480, borderRadius: '0 0 10px 10px' }}
                        image={image}
                        title="image"
                      />
                    </Card>

                    <Box my={3} />

                    <Typography variant="h4" textAlign="center" sx={{ fontWeight: 'bold', color: 'red' }}> {text} </Typography>
                  </Grid>
                )
              }
              )}
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Card>
  )
}

export default AfternoonChart;
