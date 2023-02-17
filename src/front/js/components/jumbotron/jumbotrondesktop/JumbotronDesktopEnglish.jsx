//Import React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Import Materials
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

//Import assets
import imgjumbo from "../../../assets/jumbotron/jumbotroncenter.png";
import imgjumbomobile from "../../../assets/jumbotron/jumbotroncentermobile.png";

//Import context
import { Context } from "../../../store/appContext";
import { TypesOfTherapy } from "../../typesoftherapy/TypeOftherapy.jsx";

export const JumbotronDesktopEnglish = () => {
  const { actions, store } = useContext(Context);
  return (
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
      <h1 className="fontabhaya mt-5">Name of psichologist</h1>
      <h3 className="fontabhaya">Brief description psychologist</h3>
      <Box className="d-flex flex-wrap justify-content-center mt-4" gap={2}>
        <Link className="linkremovestyle text-black" to="/terapia1">
          <TypesOfTherapy
            title="terapia 1"
            subtitle="Subtitulo"
            backgroundcolor="#F4EEEA"
          />
        </Link>
        <Link className="linkremovestyle text-black" to="/terapia1">
          <TypesOfTherapy
            title="terapia 2"
            subtitle="Subtitulo"
            backgroundcolor="#F9D9E2"
          />
        </Link>
        <Link className="linkremovestyle text-black" to="/terapia1">
          <TypesOfTherapy title="terapia 3" subtitle="Subtitulo" />
        </Link>
        <Link className="linkremovestyle text-black" to="/terapia1">
          <TypesOfTherapy title="terapia 4" subtitle="Subtitulo" />
        </Link>
      </Box>
    </Box>
  );
};
