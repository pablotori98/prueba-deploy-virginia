import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Context } from "../../store/appContext";

export const CreateReview = () => {
  const { actions, store } = useContext(Context);
  const onSubmit = async (values, ax) => {
    await actions.createreview(
      values.person_review,
      values.first_name,
      values.last_name
    );
    location.reload();
  };
  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      person_review: "",
      first_name: "",
      last_name: "",
    },
    onSubmit,
  });
  console.log(values);
  return (
    <Box>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <TextField
          className="mb-2"
          label="Review"
          name="person_review"
          values={values.person_review}
          onChange={handleChange}
        />
        <TextField
          className="mb-2"
          label="Nombre"
          name="first_name"
          values={values.first_name}
          onChange={handleChange}
        />
        <TextField
          label="Apellidos"
          name="last_name"
          values={values.last_name}
          onChange={handleChange}
        />
        <Button
          className="buttonreview my-3"
          variant="contained"
          sx={{ backgroundColor: "#E1BAAC" }}
          type="submit"
        >
          enviar
        </Button>
      </form>
    </Box>
  );
};
