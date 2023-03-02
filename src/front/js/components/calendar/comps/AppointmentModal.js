import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useLayoutEffect,
} from "react";
import {
  Modal,
  Box,
  Button,
  Fade,
  TextField,
  FormControl,
  Autocomplete,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Divider,
  Typography,
  List,
  Tooltip,
  ButtonGroup,
} from "@mui/material";
import calendarImg from "../../../assets/admin/calendar.png";

import CloseIcon from "@mui/icons-material/Close";
import { Formik, useFormik } from "formik";
import { Context } from "../../../store/appContext";
import styles from "./appointmentmodal.module.css";
import FlexBetween from "../../../features/styled/FlexBetween";
import { height } from "@mui/system";
const AppointmentModal = ({ open, close, data, closeREF, closeOutside }) => {
  //variables >>>
  const title = "Crear Nueva Cita";
  //<<<Variables
  const { store, actions } = useContext(Context);
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Marcos",
      lastName: "Saez",
      lastVisit: "2023-01-25",
      preferredDay: "Lunes",
    },
    {
      id: 2,
      name: "Pablo",
      lastName: "Toribio",
      lastVisit: "2023-01-25",
      preferredDay: "Miercoles",
    },
    {
      id: 3,
      name: "John",
      lastName: "Snow",
      lastVisit: "2023-01-24",
      preferredDay: "Jueves",
    },
    {
      id: 4,
      name: "Daenerys",
      lastName: "Targaryen",
      lastVisit: "2023-01-25",
      preferredDay: "Miercoles",
    },
  ]);

  const [patient, setPatient] = useState(null);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  //functions >>>>

  //functions <<<<


  return (
    <Box>
      <Modal open={open}>
        <Fade in={open}>
          {/* AM = Appointment Modal */}
          <Box
            className={styles.AMwrapper}
            ref={closeREF}
            sx={{
              backgroundImage: `url(${calendarImg})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom 50px right",
              opacity: 0.3,
            }}
          >
            <Header
              close={close}
              title={title}
              variant={"h4"}
              showButton={true}
            />
            <Body patients={patients} close={close} closeREF={closeREF} closeOutside={closeOutside}/>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default AppointmentModal;

const Header = (props) => {
  const { title, close, closeREF, variant, showButton } = props;

  const closeButton = () => {
    if (showButton) {
      return (
        <IconButton onClick={close}>
          <CloseIcon />
        </IconButton>
      );
    }
  };
  return (
    <>
      <Box className={styles.AMheader} ref={closeREF}>
        <Box className={styles.AMheaderTitle}>
          <Typography variant={variant} color="textPrimary" component="h2">
            {title}
          </Typography>
        </Box>
        {closeButton()}
      </Box>
      <Divider className={styles.Divider} />
    </>
  );
};

const Body = (props) => {
  const { patients, close, closeREF, closeOutside } = props;
  return (
    <Box className={styles.AMbody}>
      <AppointmentForm close={close} closeREF={closeREF} closeOutside={closeOutside}/>
      <PatientList patients={patients} />
    </Box>
  );
};

const PatientList = (props) => {
  const { patients, setPatient } = props;
  const { store, actions } = useContext(Context);
  const PatientItem = ({ name, lastName, lastVisit, preferredDay, action }) => {
    return (
      <Tooltip title={`Dia preferido: ` + preferredDay}>
        <Box className={styles.patientItem} onClick={action}>
          <Box>
            <Typography variant="h6" color="textPrimary">
              {name} {lastName}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary">
              Ultima visita: {lastVisit}
            </Typography>
          </Box>
        </Box>
      </Tooltip>
    );
  };
  return (
    <Box className={styles.AMpatientList}>
      <Header title="Pacientes" variant={"h5"} />
      <Box className={styles.patientList}>
        {patients.map((patient) => (
          <PatientItem
            key={patient.id}
            name={patient.name}
            lastName={patient.lastName}
            lastVisit={patient.lastVisit}
            preferredDay={patient.preferredDay}
            action={() => {
              actions.setSelectedPatient(patient.name, patient.lastName);
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const AppointmentForm = (props) => {
  const noClose = useRef()
  const { close, date, time, closeREF, closeOutside } = props;
  const { actions, store } = useContext(Context);
  const [patient, setPatient] = useState({
    name: store.selectedPatient.name,
    lastName: store.selectedPatient.lastName,
  });
  const appointmentData = {
    name: patient.name,
    lastName: patient.lastName,
    date: store.selectedDate.date,
    time: store.selectedDate.time,
    therapy: "",
    remarks:""
  };
  const onSubmit = async (values, ax) => {
    console.log("Im submitting", values);
    ax.setSubmitting(false);
    await close();
    await ax.resetForm();
  };
  //formik
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmiting,
  } = useFormik({
    initialValues: appointmentData,
    onSubmit,
  });

  const therapies = [
    {
      id: 1,
      name: "Psicologia",
      description: "Psicologia",
      price: "100",
      duration: "30",
      therapist: "V",
    },
    {
      id: 2,
      name: "Terapia cognitivo-conductual",
      description: "Terapia cognitivo-conductual",
      price: "100",
      duration: "30",
      therapist: "V",
    },
    {
      id: 3,
      name: "Terapia neuropsicológica",
      description: "Terapia neuropsicológica",
      price: "100",
      duration: "30",
      therapist: "V",
    },
    {
      id: 4,
      name: "Terapia Gestalt humanista",
      description: "Terapia Gestalt humanista",
      price: "100",
      duration: "30",
      therapist: "V",
    },
  ];


  return (
    <>
      <Box className={styles.AMform}>
        <Header variant={"h5"} title={"Datos de la Cita"} />
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <Typography variant="body1" color="textSecondary">
              Datos del paciente:
            </Typography>
            <FlexBetween className="mt-2" width="100%">
              <TextField
                className={styles.MuiInputBaseinput}
                label={
                  store.selectedPatient.name !== ""
                    ? store.selectedPatient.name
                    : "Nombre"
                }
                name="name"
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                error={errors.name && touched.name}
                helpertext={errors.name}
                variant="outlined"
                sx={{
                  width: "48%",
                }}
              />
              <TextField
                className={styles.MuiInputBaseinput}
                label={
                  store.selectedPatient.lastName !== ""
                    ? store.selectedPatient.lastName
                    : "Apellido"
                }
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                onBlur={handleBlur}
                error={errors.lastName && touched.lastName}
                helpertext={errors.lastName}
                variant="outlined"
                sx={{
                  width: "48%",
                }}
              />
            </FlexBetween>
            <Typography className="mt-2" variant="body1" color="textSecondary">
              Fecha y Hora
            </Typography>
            <FlexBetween className="mt-2" width="100%">
              <TextField
                className={styles.MuiInputBaseinput}
                label="Fecha"
                placeholder="AAAA-MM-DD"
                name="date"
                onChange={handleChange}
                value={values.date}
                onBlur={handleBlur}
                error={errors.date && touched.date}
                helpertext={errors.date}
                variant="outlined"
                sx={{
                  width: "48%",
                }}
              />
              <TextField
                className={styles.MuiInputBaseinput}
                label="Hora"
                placeholder="HH:MM"
                name="time"
                onChange={handleChange}
                value={values.time}
                onBlur={handleBlur}
                error={errors.time && touched.time}
                helpertext={errors.time}
                variant="outlined"
                sx={{
                  width: "48%",
                }}
              />
            </FlexBetween>
            <Typography className="mt-2" variant="body1" color="textSecondary">
              Tipo de Consulta
            </Typography>
            <FlexBetween className="mt-2 mb-2" width="100%">
              <Select
                className={styles.MuiInputBaseinput}
                label="Tipo de Consulta"
                name="therapy"
                onChange={handleChange}
                value={values.therapy}
                onBlur={handleBlur}
                error={errors.therapy && touched.therapy}
                helpertext={errors.therapy}
                variant="outlined"
                fullWidth
                inputRef={noClose}
              >
                {therapies.map((therapy) => (
                  <MenuItem key={therapy.id} value={therapy.id} >
                    {therapy.name}
                  </MenuItem>
                ))}
              </Select>
            </FlexBetween>
            <Box className="mt-2" width="100%" sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent:"center",
              alignItems:"center"
            }}>
              <ButtonGroup variant="contained" color="secondary">
                <Button
                  className={styles.AMcancel}
                  onClick={() => {
                    setShowModal(false);
                  }}
                  variant="contained"
                >
                  Descartar
                </Button>
                <Button
                  className={styles.AMsave}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Guardar
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </form>
      </Box>
    </>
  );
};
