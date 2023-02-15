//Import React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp } from "@mui/icons-material";

//Import context
import { Context } from "../store/appContext"

export const Login = () => {
    const {actions, store} = useContext(Context)
  const onSubmit = async (values, ax) => {
    await actions.signup(
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
  console.log(values);

  return (
    <Box>
      <Box>
        <Typography>Sign Up text</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            values={values.email}
            onChange={handleChange}
            name="email"
            label="Email"
          />
          <TextField
            values={values.password}
            onChange={handleChange}
            type="password"
            name="password"
            label="Contraseña"
          />
          <Button
          type="submit"
          variant="contained"
          >
            Registro
          </Button>
        </form>
      </Box>
    </Box>
  );
};
