import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Container,
  InputAdornment,
  IconButton,
  Divider,
  Autocomplete,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Header from "../features/header/Header";
import {
  clientFields,
  clientsInitialValues,
  clientsValidationSchema,
} from "../app/schemas/validationSchemas";
import {
  createClient,
  fetchStates,
  fetchCities,
} from "../app/apicalls/clientCalls";
const TitleElement = ({ title }) => {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {title}
    </Typography>
  );
};
const NewClient = () => {
  const { actions, store } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
  }, []);
  useEffect(() => {
    if (isLoading === false) {
      fetchStates()
        .then((res) => {
          setStates(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoading]);

  useEffect(() => {
    if (selectedState !== null) {
      fetchCities(selectedState)
        .then((res) => {
          setCities(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectedState]);

  //functions >>>>
  const onSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    createClient(values)
      .then((res) => {
        actions.setAlert(res.message, "success");
        setSubmitting(false);
      })
      .then(() => {
        navigate("/clientes");
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);
      });
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    isSubmiting,
  } = useFormik({
    initialValues: clientsInitialValues,
    validationSchema: clientsValidationSchema,
    onSubmit,
  });

  return (
    <Box className="container-fluid NewClientWrapper">
      <Header title={"Nuevo Cliente"} subTitle="Alta de nuevo usuario" />
      <Container
        maxWidth="lg"
        className="ClientForm orangeComp container-fluid"
      >
        <Formik onSubmit={handleSubmit} initialValues={clientsInitialValues}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TitleElement title="Datos de Cliente" />
              <Divider className="mb-3" />
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {clientFields.map((field, index) => {
                    if (field.name !== "state" && field.name !== "city") {
                      return (
                        <Grid item xs={12} sm={6} key={index}>
                          <TextField
                            variant="standard"
                            id={field.name}
                            name={field.name}
                            label={field.label}
                            fullWidth
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[field.name]}
                            error={errors[field.name] && touched[field.name]}
                            helperText={
                              errors[field.name] &&
                              touched[field.name] &&
                              errors[field.name]
                            }
                          />
                        </Grid>
                      );
                    } else if (field.name === "state") {
                      return (
                        <Grid item xs={12} sm={6} key={index}>
                          <Autocomplete
                            id={field.name}
                            name={field.name}
                            options={states}
                            value={values[field.name]}
                            onBlur={handleBlur}
                            error={errors[field.name] && touched[field.name]}
                            helperText={
                              errors[field.name] &&
                              touched[field.name] &&
                              errors[field.name]
                            }
                            getOptionLabel={(option) => option}
                            onChange={(event, newValue) => {
                              setFieldValue(
                                field.name,
                                newValue !== null
                                  ? newValue
                                  : initialValues.field.name
                              );
                              setSelectedState(newValue);
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                name={field.name}
                                label="Provincia"
                                variant="standard"
                                fullWidth
                              />
                            )}
                          />
                        </Grid>
                      );
                    } else if (field.name === "city") {
                      return (
                        <Grid item xs={12} sm={6} key={index}>
                          <Autocomplete
                            id={field.name}
                            name={field.name}
                            options={cities}
                            value={values[field.name]}
                            onBlur={handleBlur}
                            onChange={(event, newValue) => {
                              setFieldValue(
                                field.name,
                                newValue !== null
                                  ? newValue
                                  : initialValues.field.name
                              );
                            }}
                            error={errors[field.name] && touched[field.name]}
                            helperText={
                              errors[field.name] &&
                              touched[field.name] &&
                              errors[field.name]
                            }
                            getOptionLabel={(option) => option}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                name={field.name}
                                label="Poblacion"
                                variant="standard"
                                fullWidth
                              />
                            )}
                          />
                        </Grid>
                      );
                    }
                  })}
                </Grid>
                <Box
                  width="100%"
                  className="mt-5"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: "1rem",
                    padding: "1rem",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    disabled={isSubmiting}
                  >
                    Guardar
                  </Button>
                  <Button
                    color="error"
                    variant="contained"
                    type="button"
                    disabled={isSubmiting}
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Cancelar
                  </Button>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Formik>
      </Container>
    </Box>
  );
};

export default NewClient;
