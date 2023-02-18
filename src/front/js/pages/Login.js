//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp } from "@mui/icons-material";

//Import context
import { Context } from "../store/appContext"

export const Login = () => {
    const newTitle = "Login"
    useLayoutEffect(() => {
      document.title = newTitle
    }, [])
    const {actions, store} = useContext(Context)
  const onSubmit = async (values, ax) => {
    await actions.login(
      values.email,
      values.password
    );
  };

  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <Box className="login">
      <Box className="cardlogin">
        <h2 className="fontabhaya">Login</h2>
        <form onSubmit={handleSubmit} className="formlogin">
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
          className="buttonlogin"
          >
            Login
          </Button>
          </form>
      </Box>
    </Box>
  );
};
