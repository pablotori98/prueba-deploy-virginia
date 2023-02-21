//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import materials
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

import imagenpsicologa from "../../../assets/psicologa/psicologaimagen.jpg";

export const AboutMeEnglishMobile = () => {
  return (
    <Box className="d-flex bgcoloraboutme flex-wrap">
      <Box className="leftaboutme text-white">
        <Box className="leftheaderabout">
        <img className="imgaboutme" src={imagenpsicologa} />
        </Box>

        <Box className="rightheaderabout">
        <h2 className="fontabhaya titleaboutme ">Name of Psychologist</h2>
        <Typography variant="h6" className="subtitleaboutme">
          Important Info 1
        </Typography>
        <Typography variant="h6" className="subtitleaboutme">
          Important Info 2
        </Typography>
        <Typography variant="h6" className="subtitleaboutme">
          Important Info 3
        </Typography>
        </Box>
      </Box>

      <Box className="contentaboutmemobile">
      <h1 className="fontabhaya aboutmetitle">About Me</h1>
      <Box className="m-2">
      <Accordion sx={{backgroundColor:"#F5ECE8"}}>
        <AccordionSummary sx={{backgroundColor:"#E1BAAC"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='text-white'><strong>Especialidades</strong></Typography>
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
          <Typography className='text-white'><strong>Estudios</strong></Typography>
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
          <Typography className='text-white'><strong>Información adicional</strong></Typography>
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
      </Box>

  );
};

{
  /* <img className="imgaboutme" src={imagenpsicologa}/>
            <h1 className="fontabhaya aboutmetitle">Sobre mi</h1> */
}
