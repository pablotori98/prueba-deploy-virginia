import { Box, IconButton } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import ClosedSideBar from "./aux/ClosedSideBar";
import OpenSideBar from "./aux/OpenSideBar";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      className="SideBarWrapper"
      sx={{
        width: `${isOpen ? "250px" : "60px"}`,
      }}
    >
      <Box sx={{
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:`${isOpen ? "flex-end" : "center"}`,
      }}>
        <Box sx={{
          display:"flex",
          flexDirection:"row",
          alignItems:"center"
        }}>
        <IconButton onClick={() => setIsOpen((prev) => !prev)} sx={{
          color:"white"
        }}>
          {isOpen ? <CloseIcon/> : <MenuIcon />}
        </IconButton>
        </Box>
        {isOpen ? <OpenSideBar /> : <ClosedSideBar />}
      </Box>
    </Box>
  );
};

export default Sidebar;
