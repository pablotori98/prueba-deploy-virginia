import React, { useState, useEffect, useContext, useMemo } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMediaQuery, Box } from "@mui/material";

//Pages and views
import Home from "./pages/home.js";
import { Redux } from "./pages/redux.js";
import Login from "./pages/login.js";
import Admin from "./pages/admin.js";
//Pages and views

//Components and features
import NavBar from "./features/navbar";
import ProtectedRoute from "./app/ProtectedRoute.js";
import Sidebar from "./features/sidebar/Sidebar.js";
//Compoents and features
import injectContext from "./store/appContext";
import { sidePages } from "./features/sidebar/aux/SideBarData.js";
//create your first component
const Layout = () => {
  const { actions, store } = useContext(Context);
  const isLogged = useMemo(() => {
    return store.isLogged;
  }, [store.isLogged]);
  const isAdmin = useMemo(() => {
    return store.isAdmin;
  }, [store.isAdmin]);
  
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const data = { name: "Test", occupation: "test" };

  useEffect(() => {
    actions.setIsLogged()
  }, []);
  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      width="100%"
      height="100%"
      sx={{}}
    >
      <BrowserRouter basename={basename}>
        {1 + 1 === 2 ? (
          <Sidebar
            user={data || {}}
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : null}
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  enabledProtection={false}
                  component={<Home />}
                />
              }
            />
            {sidePages.map((page, index) => (
              <Route
                key={index}
                path={page.path}
                element={
                  <ProtectedRoute
                    enabledProtection={false}
                    component={page.component}
                  />
                }
              />
            ))}
            <Route element={<Login />} path="/login" />
            <Route elemente={<Redux />} path="/redux" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
};

export default injectContext(Layout);
