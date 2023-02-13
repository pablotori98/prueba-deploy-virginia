import React from "react";
import { Box, Typography } from "@mui/material";
import FlexBetween from "../styled/FlexBetween.js";

const StatBox = ({ title, value, increase, icon, description }) => {
  const currentMonth =  new Date().toLocaleString("Es-Es", { month: "long" })
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h7">{title}</Typography>
        {icon}
      </FlexBetween>

      <Typography variant="h6" fontWeight="600">
        {value}
      </Typography>
      <FlexBetween gap="1rem">
        <Typography fontStyle="italic">
          {increase}
        </Typography>
        <Typography sx={{
          textTransform:"capitalize"
        }}>{currentMonth}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default StatBox;
