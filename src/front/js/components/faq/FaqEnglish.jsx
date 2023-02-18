import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export const FaqEnglish = ()=> {
  return (
    <Box className="d-flex flex-column align-items-center mb-5">
      <Box className="m-2">
      <Accordion sx={{backgroundColor:"#F5ECE8"}}>
        <AccordionSummary sx={{backgroundColor:"#E1BAAC"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Faq 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='m-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
      <Box className="m-2">
      <Accordion sx={{backgroundColor:"#F5ECE8"}}>
        <AccordionSummary sx={{backgroundColor:"#E1BAAC"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Faq 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='m-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>

      <Box className="m-2">
      <Accordion sx={{backgroundColor:"#F5ECE8"}}>
        <AccordionSummary sx={{backgroundColor:"#E1BAAC"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Faq 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='m-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>

    </Box>
  );
}