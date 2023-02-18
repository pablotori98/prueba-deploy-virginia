import { Box } from "@mui/material";
import React from "react";
import writepost from "../../assets/admin/writepost.png";
import calendar from "../../assets/admin/calendar.png";
import message from "../../assets/admin/message.png";
import { Link } from "react-router-dom";

const AdminPanel = () => {
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
