//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Import materials
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp } from "@mui/icons-material";

//Import context
import { Context } from "../store/appContext";

//Import img
import signupimg from "../assets/forms/signup.jpg";
import Alert from "@mui/material/Alert";
import { SignUpSpanish } from "../components/signup/SignupSpanish.jsx";
import { SignUpEnglish } from "../components/signup/SignupEnglish.jsx";

export const SignUp = () => {
  const navigate = useNavigate();
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
    if (store.signup == "Correcto") {
      navigate("/");
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
    onSubmit,
  });
  console.log(values);
  console.log(process.env.BACKEND_URL);

  return (
    <>{(store.language == "spanish" ? <SignUpSpanish /> : <SignUpEnglish />)}</>
  );
};
