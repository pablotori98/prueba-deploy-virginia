//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";

import writepost from "../assets/admin/writepost.png"
export const Admin = () =>{
    return(
        <Box>
            <Box>
                <img src={writepost}/>
            </Box>
        </Box>
    )
}
