import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const TypesOfTherapy = (title, subtitle, description,button, backgroundcolor) =>{
    return(
        <Box className="card" sx={{backgroundColor: `${backgroundcolor}`}}>
            <Typography>{title}</Typography>
            <Typography>{subtitle}</Typography>
            <Typography>{description}</Typography>
            <Button>{button}</Button>
        </Box>
    )
}