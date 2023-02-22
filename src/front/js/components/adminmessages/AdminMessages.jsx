import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import mensajesadmin from "../../assets/admin/mensajesadmin.png"
import chatimg from "../../assets/admin/chat.png"
import { width } from "@mui/system";
import { DirectMessage } from "./DirectMessage.jsx";

export const AdminMessages = () =>{
    const [chat, setChat] = useState(false)
return(
    <Box className="d-flex justify-content-between">
        <Box className="d-flex flex-column justify-content-center align-items-center">
        <Button sx={{width:"20vw", display:"flex", flexDirection:"column", textTransform:"none"}} onClick={()=>setChat(false)}>
            <img className="imagesmessages" src={mensajesadmin}/>
            <h5 className="fontabhaya text-black" ><strong>Mensajes directos</strong></h5>
        </Button>
        <Button sx={{width:"20vw", display:"flex", flexDirection:"column", textTransform:"none"}} onClick={()=>setChat(true)}>
        <img className="imagesmessages" src={chatimg}/>
        <h5 className="fontabhaya text-black" ><strong>Chat</strong></h5>
        </Button>
        </Box>
        
        <Box className="chatandmessages">
            {chat==true?
        <p>Abierta pestaña de chat</p>  
        :
        <DirectMessage />
  
        }
        </Box>

    </Box>
)
}