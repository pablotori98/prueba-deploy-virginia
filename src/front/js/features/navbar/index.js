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
import SideBar from "./aux/SideBar";
import FullBar from "./aux/FullBar";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box className="NavbarWrapper container-fluid">
      <FlexBetween>{isMobile ? <SideBar /> : <FullBar />}</FlexBetween>
    </Box>
  );
};

export default NavBar;
