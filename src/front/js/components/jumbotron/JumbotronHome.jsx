import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imgjumbo from "../../assets/jumbotron/jumbotroncenter.png";
import imgjumbomobile from "../../assets/jumbotron/jumbotroncentermobile.png";

import { TypesOfTherapy } from "../typesoftherapy/TypeOftherapy.jsx";
import { JumbotronMobileEnglish } from "./jumbotronmobile/JumbotronMobileEnglish.jsx";
import { JumbotronMobileSpanish } from "./jumbotronmobile/JumbotronMobileSpanish.jsx";

import { Context } from "../../store/appContext"

export const JumbotronHome = () => {
  const {store, actions} = useContext(Context)
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    {
      isMatch?
        store.language=="spanish"?
        <JumbotronMobileSpanish />
        :
        <JumbotronMobileEnglish />
      :
      <Box
      sx={{
        backgroundImage: `url(${imgjumbo})`,
        width: "100vw",
        backgroundSize: "cover",
        height: "90vh",
        backgroundPosition: "center bottom",
      }}
      className="d-flex flex-column align-items-center justify-content-start w-100 "
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


    }
    </>
  );
};
