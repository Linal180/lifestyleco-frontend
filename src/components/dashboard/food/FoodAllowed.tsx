import { useState } from 'react';
import { FoodAllowedData } from '../../../data/Food';

import Accordion from '@mui/material/Accordion';
import { CheckCircle } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Box, Card, CardContent, CardMedia, Grid } from '@mui/material';

const FoodAllowed = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeAccord =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Card>
      <Box p={2}>
        <Typography variant="h6" fontWeight={600} color="initial" textAlign="right">: کھانے </Typography>
        <Box p={1} />

        <Accordion expanded={expanded === 'panelFoodAllow'} onChange={handleChangeAccord('panelFoodAllow')} sx={{ mb: '10px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panelFoodAllow-content"
            id="panelFoodAllow-header"
          >
            <Box sx={{ width: '100%' }}>
              <Typography variant="body1" textAlign="right" sx={{ fontWeight: 'bold', mr: '10px' }}> وہ کھانے جن کی اجازت ہے </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={2}>
              {FoodAllowedData.map((item, index) => {
                const { name, image } = item;
                return (
                  <Grid item key={index} xs={12} sm={6}>
                    <Card sx={{ maxWidth: "100%", borderRadius: '10px' }}>
                      <CardContent>
                        <Typography variant="h6" color="initial" textAlign="right"> {name} <CheckCircle color="success" /> </Typography>
                      </CardContent>

                      <CardMedia
                        sx={{ height: 200, borderRadius: '0 0 10px 10px' }}
                        image={image}
                        title="image"
                      />
                    </Card>
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

export default FoodAllowed;
