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
        <Box className="footercenter  text-white">
          <Typography><strong>Enlaces</strong></Typography>
          <Divider className="w-50 my-1"  sx={{ borderBottomWidth: 5, backgroundColor:"white" }}/>
          <Box className="d-flex text-center mt-3 ">
          <Box className="mx-4">
          <Link to="/" className="linkremovestyle text-white">
            <Typography><strong>Inicio</strong></Typography>
          </Link>
          <Link to="/services" className="linkremovestyle text-white">
            <Typography><strong>Servicios</strong></Typography>
          </Link>
          <Link to="/aboutme" className="linkremovestyle text-white">
            <Typography><strong>Sobre mi</strong></Typography>
          </Link>
          </Box>
          <Box className="mx-4">
          <Link to="/contact" className="linkremovestyle text-white">
            <Typography><strong>Contacto</strong></Typography>
          </Link>
          <Link to="/login" className="linkremovestyle text-white">
            <Typography><strong>Inicio sesión</strong></Typography>
          </Link>
          <Link to="/signup" className="linkremovestyle text-white">
            <Typography><strong>Registro</strong></Typography>
          </Link>
        </Box>
        </Box>
        </Box>
      ) : (
        <Box className="footercenter  text-white">
          <Typography><strong>Links</strong></Typography>
          <Divider className="w-50 my-1"  sx={{ borderBottomWidth: 5, backgroundColor:"white" }}/>
          <Box className="d-flex text-center mt-3 ">
          <Box className="mx-4">
          <Link to="/" className="linkremovestyle text-white">
            <Typography><strong>Home</strong></Typography>
          </Link>
          <Link to="/services" className="linkremovestyle text-white">
            <Typography><strong>Services</strong></Typography>
          </Link>
          <Link to="/aboutme" className="linkremovestyle text-white">
            <Typography><strong>About me</strong></Typography>
          </Link>
          </Box>
          <Box className="mx-4">
          <Link to="/contact" className="linkremovestyle text-white">
            <Typography><strong>Contact</strong></Typography>
          </Link>
          <Link to="/login" className="linkremovestyle text-white">
            <Typography><strong>Login</strong></Typography>
          </Link>
          <Link to="/signup" className="linkremovestyle text-white">
            <Typography><strong>Sign Up</strong></Typography>
          </Link>
        </Box>
        </Box>
        </Box>
      )}
    </>
  );
};
