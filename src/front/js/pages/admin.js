import { Box } from "@mui/material";
import React from "react";
import Header from "../features/header/Header";
import StatBox from "../features/statbox/StatBox.js";
import PickupTable from "../features/pickuptable/PickupTable";
//icons>>>>>>
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FmdBadIcon from "@mui/icons-material/FmdBad";

//<<<<<Icons
const Admin = () => {
  return (
    <Box className="container-fluid AdminWrapper">
      <Header title="Dashboard" subTitle="Vista principal" />
      <Box className="AdminBody">
        <Box className="AdminUpperBody">
          <Box className="AdminUpperBodyLeft">
            <Box className="UB-UL orangeComp">
              <StatBox
                title="Recogidas"
                value="55"
                increase="+100%"
                description="Febrero"
                icon={<LocalShippingIcon />}
              />
            </Box>
            <Box className="UB-UR orangeComp">
              <StatBox
                title="R. Pendientes Confirmacion"
                value="6"
                icon={<FmdBadIcon />}
              />
            </Box>
            <Box className="UB-DL orangeComp"></Box>
            <Box className="UB-DR orangeComp"></Box>
          </Box>
          <Box className="AdminUpperBodyRight orangeComp"> TOP RIGHT</Box>
        </Box>
        <Box className="AdminLowerBody">
          <Box className="AdminLowerBodyLeft orangeComp">
            <PickupTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
