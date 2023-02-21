import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const CalendarHeader = (props) => {
  const { title } = props;
  return (
    <Box>
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

export default CalendarHeader;
