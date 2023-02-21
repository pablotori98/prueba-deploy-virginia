//Import React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Import Materials
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";

//Import assets
import imgjumbo from "../../../assets/jumbotron/jumbotroncenter.png";
import imgjumbomobile from "../../../assets/jumbotron/jumbotroncentermobile.png";

//Import context
import { Context } from "../../../store/appContext";

export const JumbotronDesktopSpanish = () => {
  const { actions, store } = useContext(Context);
  return (
    <Box
      sx={{
        backgroundImage: `url(${imgjumbo})`,
        width: "100vw",
        backgroundSize: "cover",
        height: "90vh",
        minHeight: "530px",
        backgroundPosition: "center bottom",
      }}
      className="d-flex flex-column align-items-center justify-content-start w-100 "
    >
      <h1 className="fontabhaya mt-5">Nombre psicologa</h1>
      <h3 className="fontabhaya my-2">Breve descripcion psicologa</h3>
      <Link className="linkremovestyle" to="/contact">
      <Button
      variant="contained"
      className="btnjumbotron my-2"
      >CTA texto
      </Button>
      </Link>
    </Box>
  );
};
