//Import React
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

//Import materials
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { CallToActionSharp, ConstructionOutlined } from "@mui/icons-material";

//Import context
import { Context } from "../../../store/appContext";

//Import img
import Alert from "@mui/material/Alert";

export const ModPost = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.singleblogpost(params.idpost);
  }, []);

  const [image, setImage] = useState("");
  const convertiraBase64 = (archivos) => {
    Array.from(archivos).forEach((archivo) => {
      var reader = new FileReader();
      reader.readAsDataURL(archivo);
      reader.onload = function () {
        var base64 = reader.result;
        console.log(base64);
        setImage(base64);
      };
    });
  };

  const onSubmit = async (values, ax) => {
    await actions.modpost(
      values.title_post,
      values.paragraph1,
      values.paragraph2,
      values.paragraph3,
      values.paragraph4,
      values.paragraph5,
      values.language,
      image,
      params.idpost
    );
  };

  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      title_post: store.singlepost.title_post,
      paragraph1: store.singlepost.paragraph1,
      paragraph2: store.singlepost.paragraph2,
      paragraph3: store.singlepost.paragraph3,
      paragraph4: store.singlepost.paragraph4,
      paragraph5: "",
      language: "",
    },
    onSubmit,
  });
  console.log(store.singlepost.title_post);
  console.log(params.idpost);
  return (
    <Box className="blogsection">
      <Box>
        <form onSubmit={handleSubmit}>
          <Box className="blogpost mb-5">
            <img className="imgpost" src={store.singlepost.image_post} />
            <Box className="px-5">
              <TextField
                values={values.title_post}
                onChange={handleChange}
                name="title_post"
                label="Titulo post"
                className="w-100 my-2 "
                variant="standard"
                defaultValue={store.singlepost.title_post}
              />
            </Box>
            <Divider className="my-3" />

            <Box className="px-5 py-2 paddingblogmobile">
              <TextField
                onChange={handleChange}
                values={values.paragraph1}
                name="paragraph1"
                label="Primer párrafo"
                className="w-100 my-2"
                variant="standard"
                multiline
                InputLabelProps={{ shrink: true }}
                defaultValue={store.singlepost.paragraph1}
              />
              <TextField
                values={values.paragraph2}
                onChange={handleChange}
                name="paragraph2"
                label="Segundo párrafo"
                className="w-100 my-2"
                variant="standard"
                multiline
                InputLabelProps={{ shrink: true }}
                defaultValue={store.singlepost.paragraph2}
              />
              <TextField
                values={values.paragraph3}
                onChange={handleChange}
                name="paragraph3"
                label="Tercer párrafo"
                className="w-100 my-2"
                variant="standard"
                multiline
                InputLabelProps={{ shrink: true }}
                defaultValue={store.singlepost.paragraph3}
              />
              <TextField
                values={values.paragraph4}
                onChange={handleChange}
                name="paragraph4"
                label="Cuarto Párrafo"
                className="w-100 my-2"
                variant="standard"
                multiline
                InputLabelProps={{ shrink: true }}
                defaultValue={store.singlepost.paragraph4}
              />
              <TextField
                values={values.paragraph5}
                onChange={handleChange}
                name="paragraph5"
                label="Quinto párrafo"
                className="w-100 my-2"
                variant="standard"
                multiline
                InputLabelProps={{ shrink: true }}
                defaultValue={store.singlepost.paragraph5}
              />
              <Button
                className="my-3 uploadblogimage w-100"
                variant="contained"
                aria-label="upload picture"
                component="label"
              >
                Subir imagen post
                <input
                  values={values.image_post}
                  name="image"
                  onChange={(e) => {
                    convertiraBase64(e.target.files);
                    React.ChangeEvent(values.image_post);
                  }}
                  hidden
                  type="file"
                />{" "}
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
              <Button
                type="submit"
                variant="contained"
                className="buttonsignup mb-5 text-black"
              >
                Modificar Post
              </Button>
            </Box>
            <Typography className="mt-5 p-3">
              Escrito por Nombre psicologa
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
