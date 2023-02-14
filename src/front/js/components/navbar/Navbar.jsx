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

//Import context
import { Context } from "../../store/appContext";

//Main Function
export const Navbar = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const { actions, store } = useContext(Context);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }} className="navbar">
        <Toolbar className="padding0">
          {isMatch ? (
            <Box className="padding0" >
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
                  <Link to="/" className="linkremovestyle text-white">
                  <Box className="d-flex align-items-center">

                    <Typography variant="h6">Logo / Nombre</Typography>
                  </Box>
                  </Link>
                  <Box to="/" className="linksnavbar">
                    <Link to="/" className="linkremovestyle">
                      <Button>
                        <Typography className="buttonnavbar">Inicio</Typography>
                      </Button>
                    </Link>
                    <Link to="/" className="linkremovestyle">
                      <Button>
                        <Typography className="buttonnavbar">
                          Servicios
                        </Typography>
                      </Button>
                    </Link>
                    <Link to="/sobremi" className="linkremovestyle">
                      <Button>
                        <Typography className="buttonnavbar">
                          Sobre mi
                        </Typography>
                      </Button>
                    </Link>
                    <Link to="/contacto" className="linkremovestyle">
                      <Button>
                        <Typography className="buttonnavbar">
                          Contacto
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              ) : (
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
                  <Box className="d-flex align-items-center">
                    
                    <Typography variant="h6">Logo / Nombre</Typography>
                  </Box>
                  <Box className="linksnavbar">
                    <Link to="/home" className="linkremovestyle">
                      <Button>
                        <Typography className="buttonnavbar">Home</Typography>
                      </Button>
                    </Link>
                    <Link to="/" className="linkremovestyle">
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
                    <Link to="/contact" className="linkremovestyle">
                      <Button>
                        <Typography className="buttonnavbar">
                          Contacto
                        </Typography>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
