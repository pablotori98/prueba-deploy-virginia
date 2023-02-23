import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mensajesadmin from "../../assets/admin/mensajesadmin.png";
import chatimg from "../../assets/admin/chat.png";
import { width } from "@mui/system";
import { Context } from "../../store/appContext";
import { AnswerMessage } from "./AnswerMessage.jsx";
export const DirectMessage = () => {
  const { actions, store } = useContext(Context);
  const [id, setId] = useState(null);
  const [answer, setAnswer] = useState(false);
  useEffect(() => {
    actions.fetchallcontactmessages();
  }, []);

  useEffect(() => {
    actions.fetchonlyonemessage(id);
  }, [id]);
  return (
    <Box className="messagearea">
      <Box className="messagearealeft">
        {store.contactmessage.map((element, index) => {
          return (
            <Box
              className="d-flex align-items-center justify-content-center"
              key={index}
            >
              <Button
                sx={{ textTransform: "none", color: "black" }}
                onClick={() => setId(element.id)}
              >
                <p>
                  {element.first_name} {element.last_name}
                </p>
              </Button>
            </Box>
          );
        })}
      </Box>
      <Box className="messagearearight">
        <Typography>
          <strong>Nombre completo</strong>
        </Typography>
        <Typography className="my-3">
          {store.contactonlyonemessage.first_name}{" "}
          {store.contactonlyonemessage.last_name}
        </Typography>
        <Typography>
          <strong>Teléfono</strong>
        </Typography>
        <Typography className="my-3">
          {store.contactonlyonemessage.phone_number}
        </Typography>
        <Typography>
          <strong>Email</strong>
        </Typography>
        <Typography className="my-3">
          {store.contactonlyonemessage.email}
        </Typography>
        <Typography>
          <strong>Descripción del problema</strong>
        </Typography>
        <Typography className="my-3">
          {store.contactonlyonemessage.problem_description}
        </Typography>

        {answer ? (
          <AnswerMessage />
        ) : (
          <Button onClick={() => setAnswer(true)}>Responder</Button>
        )}
      </Box>
    </Box>
  );
};
