import {
  Box,
  AppBar,
  Toolbar,
  MenuItem,
  IconButton,
  Typography,
  Menu,
  Button,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useEffect, useRef, useMemo } from "react";
import FlexBetween from "../styled/FlexBetween";
import SideBar from "./comps/SideBar";
import FullBar from "./comps/FullBar";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Box className="NavbarWrapper container-fluid">
      <FlexBetween sx={{ width: "100%", height: "100%" }} className="container-fluid">
        {isMobile ? <SideBar /> : <FullBar />}
      </FlexBetween>
    </Box>
  );
};

export default NavBar;
