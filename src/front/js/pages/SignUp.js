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
  //Declaracion navigate
  const navigate = useNavigate();
  //Use context
  const { actions, store } = useContext(Context);

  //Nombre pestaña
  if(store.language=="spanish"){
    const newTitle = "Registro";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);}else{
      const newTitle = "Sign Up";
      useLayoutEffect(() => {
        document.title = newTitle;
      }, []);
    }

    //Scroll to top
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  //Formik
  //Values
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
  //UseFormik
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


  return (
    <>{(store.language == "spanish" ? <SignUpSpanish /> : <SignUpEnglish />)}</>
  );
};
