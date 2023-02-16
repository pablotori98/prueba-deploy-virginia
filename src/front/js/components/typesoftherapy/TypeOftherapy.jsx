import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const TypesOfTherapy = ({
  title,
  subtitle,
  description,
  button,
  backgroundcolor,
}) => {
  return (
    <Box
      className="card"
      sx={{
        backgroundColor: `${backgroundcolor}`,
      }}
    >
      <Typography>
        <strong>{title}</strong>
      </Typography>
      <Typography className="subtitle">{subtitle}</Typography>
      {/* <Typography>{description}</Typography>
            <Button>{button}</Button> */}
    </Box>
  );
};
