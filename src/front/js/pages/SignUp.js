//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp } from "@mui/icons-material";

//Import context
import { Context } from "../store/appContext"

//Import img
import signupimg from "../assets/forms/signup.jpg"

export const SignUp = () => {
    const newTitle = "SignUp"
    useLayoutEffect(() => {
      document.title = newTitle
    }, [])
    const {actions, store} = useContext(Context)
  const onSubmit = async (values, ax) => {
    await actions.signup(
      values.name,
      values.last_name,
      values.phonenumber,
      values.email,
      values.password
    );
  };

  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
    },
    onSubmit,
  });
  console.log(values);

  return (
    <Box className="signup">
      <Box className="cardsignup">
        <h1 className="fontabhaya">Sign Up text</h1>
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
          <Button
          type="submit"
          variant="contained"
          className="buttonsignup"
          >
            Registro
          </Button>

        </form>
        </Box>
    </Box>
  );
};
