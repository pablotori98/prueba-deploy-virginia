import React from "react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import FlexBetween from "../../styled/FlexBetween.js";
//pages comps >>>
import Admin from "../../../pages/admin.js";
import NewClient from "../../../pages/NewClient.js";
import Clients from "../../../pages/Clients.js";
import Pickups from "../../../pages/Pickups.js";
import BusinessIcon from '@mui/icons-material/Business';
import MyDelegation from "../../../pages/MyDelegation.js";
//<<< pages comps

export const sidePages = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/admin",
    exact: true,
    component: <Admin />,
  },
  {
    name:"Mi Delegacion",
    icon:<BusinessIcon/>,
    path:"/admin/mi delegacion",
    component:<MyDelegation />
  },
  {
    name: "Recogidas",
    icon: <LocalShippingIcon />,
    path: "/recogidas",
    exact: true,
    component: <Pickups />,
  },
  {
    name: "Clientes",
    icon: <PeopleIcon />,
    path: "/clientes",
    exact: true,
    component: <Clients />,
  },
  {
    name: "Nuevo Cliente",
    icon: <PersonAddAltIcon />,
    path: "/clientes/nuevo",
    exact: true,
    component: <NewClient />,
  },
];

export const renderPage = (isClosed) => {
  const navigate = useNavigate();
  if (isClosed)
    return sidePages.map((page) => (
      <Box key={page.name} className="my-3">
        <Tooltip title={page.name}>
          <IconButton onClick={() => navigate(page.path)}>
            {page.icon}
          </IconButton>
        </Tooltip>
      </Box>
    ));
  else
    return sidePages.map((page) => (
      <FlexBetween key={page.name} onClick={() => navigate(page.path)}>
        <Typography>{page.name}</Typography>
        <IconButton>{page.icon}</IconButton>
      </FlexBetween>
    ));
};
