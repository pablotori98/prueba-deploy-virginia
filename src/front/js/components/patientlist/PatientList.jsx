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
    <Box className="d-flex">
      <Box>
      {store.users.map((element, index) => {
        return (
            <Box key={index} className="d-flex flex-column">
          <Button  onClick={() => setId(element.id)}>
            {element.first_name} {element.last_name}
          </Button>
          </Box>
        );
      })}
      </Box>
      <Box>
      {id !=null? 
      <>
      <p>{store.userinfo.first_name} {store.userinfo.last_name}</p>
      <p>{store.userinfo.phone_number}</p>
      <p>{store.userinfo.email}</p>
      <p>{store.userinfo.paid_sessions == null ? 0 : store.user.paid_sessions}</p>
      
      </>
      :null}</Box>
      </Box>
  );
};
