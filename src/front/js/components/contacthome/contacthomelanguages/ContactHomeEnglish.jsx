//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Import materials
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp } from "@mui/icons-material";

//Import context
import { Context } from "../../../store/appContext";

//Import img
import Alert from '@mui/material/Alert';

export const ContactHomeEnglish = () => {
  const navigate = useNavigate()

  const { actions, store } = useContext(Context);
  const onSubmit = async (values, ax) => {
    await actions.contacthome(
      values.first_name,
      values.last_name,
      values.email,
      values.phone_number,
      values.description
    );
    if(store.signup=="Correcto"){
      navigate("/")
    }
  };

  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      description:""
    },
    onSubmit
  });
  console.log(values);
  console.log(process.env.BACKEND_URL)

  return (
    <Box className="signup">
      <Box className="cardsignup">
        <h1 className="fontabhaya">Contact</h1>
        <form onSubmit={handleSubmit} className="formsignup">
          <TextField
            values={values.first_name}
            onChange={handleChange}
            name="first_name"
            label="Name"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.last_name}
            onChange={handleChange}
            name="last_name"
            label="Last Name"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.phone_number}
            onChange={handleChange}
            type="tel"
            name="phone_number"
            label="Phone Number"
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
            values={values.description}
            onChange={handleChange}
            name="description"
            label="Tell me your problem"
            className="w-100 my-2"
            variant="standard"
            id="outlined-multiline-flexible"
            multiline
          />

          <Button type="submit" variant="contained" className="btnjumbotron">
            Submit
          </Button>
          {/* {store.signup !=""? store.signup !="Correcto"?
        <Alert severity="error">{store.signup}</Alert>  : null
        :
        null
        } */}
        </form>
      </Box>
    </Box>
  );
};
