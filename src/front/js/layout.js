import React, { useState, useEffect, useContext, useMemo } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery, Box } from "@mui/material";

//Pages and views

import Welcome from "./pages/Welcome";
import { ContactInfo } from "./pages/ContactInfo";
import { AboutMe } from "./pages/AboutMe";

//Pages and views

//Components and features
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import ProtectedRoute from "./app/ProtectedRoute.js";
//Compoents and features
import injectContext from "./store/appContext";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      width="100%"
      height="100%"
      sx={{}}
    >
      <BrowserRouter basename={basename}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Navbar />
          <Box className="contentfullheight">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<Welcome />}
                  />
                }
              />
              <Route
                path="/contact"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<ContactInfo />}
                  />
                }
              />
              <Route
                path="/aboutme"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<AboutMe />}
                  />
                }
              />
            </Routes>
            <Contact />
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </Box>
  );
};

export default injectContext(Layout);
