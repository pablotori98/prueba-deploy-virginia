// Import React
import React, { useContext, useEffect, useState } from "react";
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
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { actions, store } = useContext(Context);
  useEffect(()=>{
    if(sessionStorage.getItem("user_id")){
  actions.fetchuser(sessionStorage.getItem("user_id"))}
}, []);
  return (
    <React.Fragment>
      <AppBar  sx={{ background: "#F5ECE8 " }} elevation={0} className="navbar">
        <Toolbar className="padding0">
          {isMatch ? (
            <Box className="padding0">
              <Box className="positionabsoluterighttop">
                <DrawerComp />
              </Box>

              <Box className="navbarmobile">
                <Link className="linkremovestyle text-black" to="/">
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
