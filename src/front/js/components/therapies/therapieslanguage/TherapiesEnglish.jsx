import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../../store/appContext"

export const TherapiesEnglish = () =>{
    const {actions, store} = useContext(Context)
    return(
        <Box className="containertherapies">
            <Box className="d-flex flex-column align-items-center cardtherapies">
                <Box className="mb-3">Icon</Box>
                <Typography>Therapy 1</Typography>
                <Typography>Description</Typography>
            </Box>
            <Box className="d-flex flex-column align-items-center cardtherapies">
                <Box className="mb-3">Icon</Box>
                <Typography>Therapy 2</Typography>
                <Typography>Description</Typography>
            </Box>
            <Box className="d-flex flex-column align-items-center cardtherapies">
                <Box className="mb-3">Icon</Box>
                <Typography>Therapy 3</Typography>
                <Typography>Description</Typography>
            </Box>
            <Box className="d-flex flex-column align-items-center cardtherapies">
                <Box className="mb-3">Icon</Box>
                <Typography>Therapy 4</Typography>
                <Typography>Description</Typography>
            </Box>
        </Box>
    )
}