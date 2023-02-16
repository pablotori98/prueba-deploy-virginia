import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import imgjumbo from "../../assets/jumbotron/jumbotron.jpg";
import { TypesOfTherapy } from "../typesoftherapy/TypeOftherapy.jsx";

export const JumbotronHome = () => {
  return (
    <Box
    //   sx={{
    //     backgroundImage: `url(${imgjumbo})`,
    //     width: "100vw",
    //     backgroundSize: "cover",
    //     height: "70vh",
    //     backgroundPosition: "center",
    //   }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <h1 className="fontabhaya mt-5">Nombre psicologa</h1>
      <h3 className="fontabhaya">Breve descripcion psicologa</h3>
      <Box className="d-flex flex-wrap justify-content-center mt-4" gap={2}>
        <Link className="linkremovestyle text-black" to="/terapia1"><TypesOfTherapy title="terapia 1" subtitle="Subtitulo" backgroundcolor="#F4EEEA"/></Link>
        <Link className="linkremovestyle text-black" to="/terapia1"><TypesOfTherapy title="terapia 2" subtitle="Subtitulo" backgroundcolor="#F9D9E2"/></Link>
        <Link className="linkremovestyle text-black" to="/terapia1"><TypesOfTherapy title="terapia 3" subtitle="Subtitulo"/></Link>
        <Link className="linkremovestyle text-black" to="/terapia1"><TypesOfTherapy title="terapia 4" subtitle="Subtitulo"/></Link>
      </Box>
    </Box>
  );
};
