//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Import materials
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp } from "@mui/icons-material";

//Import context
import { Context } from "../store/appContext";

export const Login = () => {
  const { actions, store } = useContext(Context);
  const navigate = useNavigate();
  if(store.language=="spanish"){
    const newTitle = "Inicio sesión";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);}else{
      const newTitle = "Login";
      useLayoutEffect(() => {
        document.title = newTitle;
      }, []);
    }
  const onSubmit = async (values, ax) => {
    await actions.login(values.email, values.password);
    navigate("/");
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
          {store.language == "spanish" ? (
            <>
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
            </>
          ) : (
            <>
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
                label="Password"
                className="w-100 my-2"
                variant="standard"
              />
            </>
          )}
          <Button type="submit" variant="contained" className="buttonlogin">
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};
