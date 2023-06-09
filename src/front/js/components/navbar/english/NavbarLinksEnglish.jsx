// Import React
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Import Materials
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//Import components

export const NavbarLinksEnglish = () => {
  return (
    <Box
      sx={{
        marginLeft: "auto",
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "75vw",
      }}
    >
      <Link to="/" className="linkremovestyle text-black">
        <Box className="d-flex align-items-center">
          <Typography variant="h6" className="linksnavbar">
            Logo / Name
          </Typography>
        </Box>
      </Link>
      <Box className="linksnavbar">
        <Link to="/" className="linkremovestyle">
          <Button>
          <Typography className="buttonnavbar">Home</Typography>
          </Button>
        </Link>
        <Link to="/services" className="linkremovestyle">
          <Button>
          <Typography className="buttonnavbar">
              Services
            </Typography>
          </Button>
        </Link>
        <Link to="/aboutme" className="linkremovestyle">
          <Button>
          <Typography className="buttonnavbar">
              About Me
            </Typography>
          </Button>
        </Link>
        <Link to="/blog" className="linkremovestyle">
          <Button>
            <Typography className="buttonnavbar">Blog</Typography>
          </Button>
        </Link>
        <Link to="/reviews" className="linkremovestyle">
          <Button>
            <Typography className="buttonnavbar">Reviews</Typography>
          </Button>
        </Link>
        <Link to="/contact" className="linkremovestyle">
          <Button>
          <Typography className="buttonnavbar">
              Contact
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
