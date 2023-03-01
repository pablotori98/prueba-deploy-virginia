import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Import Materials
import { Box, Button, Typography } from "@mui/material";

import { Context } from "../../store/appContext";

export const PatientList = () => {
  const [id, setId] = useState();
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.fetchallusers();
  }, []);
  console.log(id);

  useEffect(() => {
    actions.fetchuserinfo(id);
  }, [id]);

  return (
    <Box className="patientlist">
      <Box className="leftpatientlist">
      {store.users.map((element, index) => {
        return (
            <Box key={index} className="d-flex flex-column">
          <Button  className="text-black" onClick={() => setId(element.id)}>
            <strong>{element.first_name} {element.last_name}</strong>
          </Button>
          </Box>
        );
      })}
      </Box>
      <Box className="rightpatientlist">
      {id !=null? 
      <>
      <p>Nombre:</p>
      <p>{store.userinfo.first_name} {store.userinfo.last_name}</p>
      <p>Número de teléfono:</p>
      <p>{store.userinfo.phone_number}</p>
      <p>Email:</p>
      <p>{store.userinfo.email}</p>
      <p>Número de sesiones pagadas:</p>
      <Box className="d-flex">
      <Button>+1</Button>
      <p>{store.userinfo.paid_sessions == null ? 0 : store.user.paid_sessions}</p>
      <Button>-1</Button>
      </Box>
      </>
      :null}</Box>
      </Box>
  );
};
