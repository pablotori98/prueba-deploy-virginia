import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../../store/appContext"

export const TherapiesSpanish = () =>{
    const {actions, store} = useContext(Context)
    return(
        <Box className="containertherapies">
            <Box className="d-flex flex-column align-items-center cardtherapies">
                <Box className="mb-3">Icon</Box>
                <Typography>Terapia 1</Typography>
                <Typography>Descripcion</Typography>
            </Box>
            <Box className="d-flex flex-column align-items-center cardtherapies">
                <Box className="mb-3">Icon</Box>
                <Typography>Terapia 2</Typography>
                <Typography>Descripcion</Typography>
            </Box>
            <Box className="d-flex flex-column align-items-center cardtherapies">
                <Box className="mb-3">Icon</Box>
                <Typography>Terapia 3</Typography>
                <Typography>Descripcion</Typography>
            </Box>
            <Box className="d-flex flex-column align-items-center cardtherapies">
                <Box className="mb-3">Icon</Box>
                <Typography>Terapia 4</Typography>
                <Typography>Descripcion</Typography>
            </Box>
        </Box>
    )
}