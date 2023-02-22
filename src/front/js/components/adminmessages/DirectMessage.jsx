import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mensajesadmin from "../../assets/admin/mensajesadmin.png"
import chatimg from "../../assets/admin/chat.png"
import { width } from "@mui/system";
import { Context } from "../../store/appContext"
export const DirectMessage = () =>{
    const {actions, store} = useContext(Context)
    useEffect(()=>{actions.fetchallcontactmessages()},[])
    return(
        <Box>
            <Box>
            {store.contactmessage.map((element, index)=>{return(
                <Box key={index}>
                <p>{element.first_name}</p>
                </Box>
            )})}
            </Box>
            <Box>
                
            </Box>
        </Box>
    )
}

