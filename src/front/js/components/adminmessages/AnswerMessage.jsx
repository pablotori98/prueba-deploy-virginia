//Import React
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Import materials
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp, Store } from "@mui/icons-material";

//Import context

//Import img
import Alert from "@mui/material/Alert";
import { Context } from "../../store/appContext";

export const AnswerMessage = () => {
    const {store, actions } =useContext(Context)
  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      email: store.contactonlyonemessage.email,
      subject: "",
      text:"",
    },
  });
console.log(values)
  return (
    <Box className="d-flex flex-column ">
      <TextField className="mb-2" name="email" label="Email" values={values.email} onChange={handleChange} defaultValue={store.contactonlyonemessage.email}/>
      <TextField className="mb-2" name="subject" label="Asunto" values={values.subject} onChange={handleChange}/>
      <TextField className="mb-2" name="text" label="Mensaje" values={values.text} onChange={handleChange}/>
    <Button sx={{background:"#E1BAAC"}} variant="contained"><a className="linkremovestyle text-white" href={`mailto:${values.email}?subject=${values.subject}!&body=${values.text}!`}><strong>Enviar Correo</strong></a></Button>
    </Box>
  );
};
