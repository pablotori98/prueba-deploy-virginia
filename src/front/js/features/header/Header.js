import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Header = ({ title, subTitle }) => {
  return (
    <Box className="mt-3">
      <Typography variant="h5">{title}</Typography>
      <Divider />
      <Typography variant="subtitle1">{subTitle}</Typography>
    </Box>
  );
};

export default Header;
