//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";
import { FooterRight } from "./FooterRight.jsx";
import { FooterCenter } from "./FooterCenter.jsx";
import { FooterLeft } from "./FooterLeft.jsx";

export const Footer = () => {
  return (
    <Box className="footer">
        <FooterLeft />
        <FooterCenter />
        <FooterRight />
    </Box>
  );
};
