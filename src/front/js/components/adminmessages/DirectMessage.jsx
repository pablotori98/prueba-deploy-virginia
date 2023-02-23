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
    <Box className="messagearea mt-5">
      <Box className="messagearealeft">
        {store.contactmessage.map((element, index) => {
          return (
            <Box
              className="d-flex align-items-center justify-content-center"
              key={index}
            >
              <Button
                sx={{ textTransform: "none", color: "black", minWidth: "25vw" }}
                onClick={() => setId(element.id)}
              >
                {element.first_name} {element.last_name}
              </Button>
            </Box>
          );
        })}
      </Box>
      {id != null ? (
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
            <Button variant="contained" className="answerquestion" onClick={() => setAnswer(true)}><strong>Responder</strong></Button>
          )}
        </Box>
      ) : (
        <Box className="d-flex justify-content-center- align-items-center w-100">
          <Typography className="w-100 text-center"> Seleccione un paciente para ver su mensaje</Typography>
        </Box>
      )}
    </Box>
  );
};
