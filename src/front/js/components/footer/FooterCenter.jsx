//Import React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Divider, Typography } from "@mui/material";

import { Context } from "../../store/appContext";
export const FooterCenter = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {store.language == "spanish" ? (
        <Box className="footercenter">
          <Typography>Enlaces interés</Typography>
          <Divider className="w-50" />
          <Link to="/" className="linkremovestyle">
            <Typography>Inicio</Typography>
          </Link>
          <Link to="/services" className="linkremovestyle">
            <Typography>Servicios</Typography>
          </Link>
          <Link to="/aboutme" className="linkremovestyle">
            <Typography>Sobremi</Typography>
          </Link>
          <Link to="/contact" className="linkremovestyle">
            <Typography>Contacto</Typography>
          </Link>
          <Link to="/login" className="linkremovestyle">
            <Typography>Inicio sesión</Typography>
          </Link>
          <Link to="/signup" className="linkremovestyle">
            <Typography>Registro</Typography>
          </Link>
        </Box>
      ) : (
        <Box className="footercenter">
          <Typography>Links</Typography>
          <Divider className="w-50" />
          <Link to="/" className="linkremovestyle">
            <Typography>Links</Typography>
          </Link>
        </Box>
      )}
    </>
  );
};
