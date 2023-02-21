import { Box } from "@mui/material";
import React, { useContext, useLayoutEffect } from "react";
import writepost from "../../assets/admin/writepost.png";
import calendar from "../../assets/admin/calendar.png";
import message from "../../assets/admin/message.png";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
const AdminPanel = () => {
  const {actions, store} = useContext(Context)
  if(store.language=="spanish"){
    const newTitle = "Administrador";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);}else{
      const newTitle = "Admin";
      useLayoutEffect(() => {
        document.title = newTitle;
      }, []);
    }
  return (
    <Box className="fatheradmin">
      <Link to="/admin/blog" className="linkremovestyle text-black">
        <Box className="adminmodify">
          <img src={writepost} />
          <h3 className="fontabhaya">Crear/ModificarBlog</h3>
        </Box>
      </Link>
      <Link to="/admin/citas" className="linkremovestyle text-black">
        <Box className="adminmodify">
          <img src={calendar} />
          <h3 className="fontabhaya">Modificar/Crear Cita</h3>
        </Box>
      </Link>
      <Link to="/admin/messages" className="linkremovestyle text-black">
        <Box className="adminmodify">
          <img src={message} />
          <h3 className="fontabhaya">Recepción de mensajes</h3>
        </Box>
      </Link>
    </Box>
  );
};

export default AdminPanel;
