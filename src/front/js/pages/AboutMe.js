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
        <h1 className="fontabhaya aboutmetitle">Sobre Mi</h1>
        <Box className="boxcardaboutme">
          <Box className="aboutmeinfocard text-center">
            <h3 className="fontabhaya">Especialidades</h3>
            <p>Especialidad 1</p>
            <p>Especialidad 2</p>
            <p>Especialidad 3</p>

          </Box>
          <Box className="aboutmeinfocard text-center">
            <h3 className="fontabhaya">Estudios</h3>
            <p>Estudios 1</p>
            <p>Estudios 2</p>
            <p>Estudios 3</p>
          </Box>
          <Box className="aboutmeinfocard text-center">
            <h3 className="fontabhaya">Información adicional</h3>
            <p>Información adicional 1</p>
            <p>Información adicional 2</p>
            <p>Información adicional 3</p>
          </Box>
          <Box className="aboutmeinfocard text-center">
            <h3 className="fontabhaya">Información adicional</h3>
            <p>Información adicional 4</p>
            <p>Información adicional 5</p>
            <p>Información adicional 6</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

{
  /* <img className="imgaboutme" src={imagenpsicologa}/>
            <h1 className="fontabhaya aboutmetitle">Sobre mi</h1> */
}
