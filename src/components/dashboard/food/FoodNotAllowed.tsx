import { useState } from 'react';
import { FoodNotAllowedData } from '../../../data/Food';

import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Box, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { Cancel } from '@mui/icons-material';

const FoodNotAllowed = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeAccord =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Card>
      <Box p={2}>
        <Accordion expanded={expanded === 'panelFoodNotAllow'} onChange={handleChangeAccord('panelFoodNotAllow')} sx={{ mb: '10px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panelFoodNotAllowd-content"
            id="panelFoodNotAllowd-header"
          >
            <Box sx={{ width: '100%' }}>
              <Typography variant="body1" textAlign="right" sx={{ fontWeight: 'bold', mr: '10px' }}> وہ کھانے جن سے پرہیز کرنا ہے </Typography>
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={2}>
              {FoodNotAllowedData.map((item, index) => {
                const { name, image } = item;
                return (
                  <Grid item key={index} xs={12} sm={6}>
                    <Card sx={{ maxWidth: '100%', borderRadius: '10px' }}>
                      <CardContent>
                        <Typography variant="h6" color="initial" textAlign="right"> {name} <Cancel color="warning" /> </Typography>
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

export default FoodNotAllowed;
