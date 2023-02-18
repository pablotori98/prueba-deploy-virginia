//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Import materials
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp } from "@mui/icons-material";

//Import context
import { Context } from "../../store/appContext";

//Import img
import Alert from '@mui/material/Alert';

export const SignUpSpanish = () => {
  const navigate = useNavigate()
  const newTitle = "SignUp";
  useLayoutEffect(() => {
    document.title = newTitle;
  }, []);
  const { actions, store } = useContext(Context);
  const onSubmit = async (values, ax) => {
    await actions.signup(
      values.first_name,
      values.last_name,
      values.username,
      values.email,
      values.password,
      values.phone_number
    );
    if(store.signup=="Correcto"){
      navigate("/")
    }
  };

  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      phone_number: "",
    },
    onSubmit
  });


  return (
    <Box className="signup">
      <Box className="cardsignup">
        <h1 className="fontabhaya">Registro</h1>
        <form onSubmit={handleSubmit} className="formsignup">
          <TextField
            values={values.first_name}
            onChange={handleChange}
            name="first_name"
            label="Nombre"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.last_name}
            onChange={handleChange}
            name="last_name"
            label="Apellido"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.username}
            onChange={handleChange}
            name="username"
            label="Username"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.phone_number}
            onChange={handleChange}
            type="tel"
            name="phone_number"
            label="Número de telefono"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.email}
            onChange={handleChange}
            name="email"
            label="Email"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.password}
            onChange={handleChange}
            type="password"
            name="password"
            label="Contraseña"
            className="w-100 my-2"
            variant="standard"
          />
          <Button type="submit" variant="contained" className="buttonsignup">
            Registro
          </Button>
          {store.signup !=""? store.signup !="Correcto"?
        <Alert severity="error">{store.signup}</Alert>  : null
        :
        null
        }
        </form>
      </Box>
    </Box>
  );
};
