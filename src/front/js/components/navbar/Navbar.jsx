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
import DrawerComp from "./Drawer.jsx";
import { NavbarLinksSpanish } from "./spanish/NavbarLinksSpanish.jsx";

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
      <AppBar sx={{ background: "#F5F5F5 " }} className="navbar">
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
                <Link to="/login" className="linkremovestyle">
                <Button>Login</Button>
                </Link>
                <Link to="/signup" className="linkremovestyle">
                <Button>SignUp</Button>
                </Link>
                </>
              ) : (
                <>
                <NavbarLinksEnglish />
                <Link to="/login" className="linkremovestyle">
                <Button>Login</Button>
                </Link>
                <Link to="/signup" className="linkremovestyle">
                <Button>SignUp</Button>
                </Link>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
