import React, { useState, useEffect, useContext, useMemo } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery, Box } from "@mui/material";

//Pages and views

import Welcome from "./pages/Welcome";
//Pages and views

//Components and features

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
          {/* <NavBar /> */}
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

          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
};

export default injectContext(Layout);
