import React, { useState, useEffect, useContext, useMemo } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery, Box } from "@mui/material";

//Pages and views

import Welcome from "./pages/Welcome";
import { ContactInfo } from "./pages/ContactInfo";
import { AboutMe } from "./pages/AboutMe";
import { Admin } from "./pages/Admin";
import { UserProfile } from "./pages/UserProfile";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Servicios } from "./pages/Servicios";
import AdminPanel from "./pages/adminpanel";
import { Blog } from "./pages/Blog";

//Pages and views

//Components and features
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Contact } from "./components/contact/Contact.jsx";
import ProtectedRoute from "./app/ProtectedRoute.js";
import AdminRoute from "./app/AdminRoute";
//Components and features
import injectContext from "./store/appContext";
import { HandlePost } from "./components/blog/Createpost/HandlePost.jsx";

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
              <Route
                path="/userprofile"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<UserProfile />}
                  />
                }
              />

              <Route
                path="/login"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<Login />}
                  />
                }
              />
              <Route
                path="/blog"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<Blog />}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<SignUp />}
                  />
                }
              />

              <Route
                path="/services"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<Servicios />}
                  />
                }
              />
              <Route
                path="/admin/blog"
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={<HandlePost />}
                  />
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminRoute isEnabled={true} component={<AdminPanel />} />
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
