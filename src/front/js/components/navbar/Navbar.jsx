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

import PersonIcon from "@mui/icons-material/Person";
//Import components
import DrawerComp from "./Drawer.jsx";
import { NavbarLinksSpanish } from "./spanish/NavbarLinksSpanish.jsx";
import { Dropdown } from "../dropdown/Dropdown.jsx";
//Import context
import { Context } from "../../store/appContext";
import { NavbarLinksEnglish } from "./english/NavbarLinksEnglish.jsx";

//Main Function
export const Navbar = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const { actions, store } = useContext(Context);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#9C8B7A " }} className="navbar">
        <Toolbar className="padding0">
          {isMatch ? (
            <Box className="padding0">
              <Box className="positionabsoluterighttop">
                <DrawerComp />
              </Box>

              <Box className="navbarmobile">
                <Link className="linkremovestyle text-white" to="/">
                  <Typography>Logo</Typography>
                </Link>
              </Box>
            </Box>
          ) : (
            <>
              {store.language == "spanish" ? (
                <>
                  <NavbarLinksSpanish />
                  <Box className="mx-3">
                    <Dropdown />
                  </Box>

                </>
              ) : (
                <>
                  <NavbarLinksEnglish />
                  <Box className="mx-3">
                    <Dropdown />
                  </Box>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
