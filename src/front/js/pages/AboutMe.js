//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";
import imagenpsicologa from "../assets/psicologa/psicologaimagen.jpg";

export const AboutMe = () => {
  return (
    <Box className="d-flex bgcoloraboutme">
      <Box className="leftaboutme text-white">
        <img className="imgaboutme" src={imagenpsicologa} />
        <h2 className="fontabhaya my-4">Nombre Psicologa</h2>
        <Typography variant="h6" className="my-1">
          Información importante 1
        </Typography>
        <Typography variant="h6" className="my-1">
          Información importante 2
        </Typography>
        <Typography variant="h6" className="my-1">
          Información importante 3
        </Typography>
      </Box>
      <Box className="rightaboutme">
        <h1 className="fontabhaya">Sobre Mi</h1>
      </Box>
    </Box>
  );
};

{
  /* <img className="imgaboutme" src={imagenpsicologa}/>
            <h1 className="fontabhaya aboutmetitle">Sobre mi</h1> */
}
