//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Import materials
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp } from "@mui/icons-material";

//Import context
import { Context } from "../../../store/appContext";

//Import img
import Alert from "@mui/material/Alert";

export const HandlePost = () => {
  const navigate = useNavigate();

  const { actions, store } = useContext(Context);
  const onSubmit = async (values, ax) => {
    await actions.handlepost(
      values.title_post,
      values.paragraph1,
      values.paragraph2,
      values.paragraph3,
      values.paragraph4,
      values.paragraph5,
      values.language
    );
    // if(store.signup=="Correcto"){
    //   navigate("/")
    // }
  };

  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      title_post: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      paragraph4: "",
      paragraph5: "",
      language: "",
    },
    onSubmit,
  });

  return (
    <Box className="signup">
      <Box className="cardsignup">
        <h1 className="fontabhaya">Blog Management</h1>
        <form onSubmit={handleSubmit} className="formsignup">
          <TextField
            values={values.title_post}
            onChange={handleChange}
            name="title_post"
            label="Titulo post"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.paragraph1}
            onChange={handleChange}
            name="paragraph1"
            label="Primer párrafo"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.paragraph2}
            onChange={handleChange}
            name="paragraph2"
            label="Segundo párrafo"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.paragraph3}
            onChange={handleChange}
            name="paragraph3"
            label="Tercer párrafo"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.paragraph4}
            onChange={handleChange}
            name="paragraph4"
            label="Cuarto Párrafo"
            className="w-100 my-2"
            variant="standard"
          />
          <TextField
            values={values.paragraph5}
            onChange={handleChange}
            name="paragraph5"
            label="Quinto párrafo"
            className="w-100 my-2"
            variant="standard"
          />
          <Button
            className="my-3 uploadblogimage w-100"
            variant="contained"
            aria-label="upload picture"
            component="label"
          >
            Subir imagen post
            <input hidden accept="image/*" type="file" />
          </Button>
          <Box className="d-flex align-items-center mt-2">
            <Typography className="me-3">Seleccionar idioma</Typography>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.language}
              name="language"
              label="Language"
              onChange={handleChange}
            >
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="English">English</MenuItem>
            </Select>
          </Box>

          <Button type="submit" variant="contained" className="buttonsignup mb-5">
            Registro
          </Button>
          {store.signup != "" ? (
            store.signup != "Correcto" ? (
              <Alert severity="error">{store.signup}</Alert>
            ) : null
          ) : null}
        </form>
      </Box>
    </Box>
  );
};
