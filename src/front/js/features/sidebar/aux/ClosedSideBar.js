import React from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import { renderPage } from "./SideBarData";
const ClosedSideBar = () => {
  return <Box sx={{
    marginTop:"4rem",
    height:"90%",
    width:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  }}>
    {renderPage(true)}
  </Box>
}
export default ClosedSideBar
