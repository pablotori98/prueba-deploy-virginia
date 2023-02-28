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
} from "@mui/material";
//MUI DATEPICKER >>>
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//<<< MUI DATE PICKER
import CloseIcon from "@mui/icons-material/Close";
import { Formik, useFormik } from "formik";
import { Context } from "../../../store/appContext";
import { appointmentInitialValues } from "./appointmentData";
import styles from "./appointmentmodal.module.css";
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

  useLayoutEffect(() => {
    document.addEventListener("mousedown", closeOutside);
    return () => {
      document.removeEventListener("mousedown", closeOutside);
    };
  }, []);

  useEffect(() => {
    if (close === false) {
      document.removeEventListener("mousedown", closeOutside);
    }
  }, [close]);

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
    initialValues: appointmentInitialValues,
    onSubmit,
  });
  return (
    <Box>
      <Modal open={open}>
        <Fade in={open}>
          {/* AM = Appointment Modal */}
          <Box className={styles.AMwrapper} ref={closeREF}>
            <Header
              close={close}
              title={title}
              variant={"h4"}
              showButton={true}
            />
            <Body patients={patients} />
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
  const { patients } = props;
  return (
    <Box className={styles.AMbody}>
      <AppointmentForm />
      <PatientList patients={patients} />
    </Box>
  );
};

const PatientList = (props) => {
  const { patients, setPatient } = props;

  const PatientItem = ({ name, lastName, lastVisit, preferredDay }) => {
    return (
      <Tooltip title={`Dia preferido: ` + preferredDay}>
        <Box className={styles.patientItem}>
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
            />))}
      </Box>
    </Box>
  );
};

const AppointmentForm = () => {
  return (
    <>
      <Box className={styles.AMform}>
        <Header variant={"h5"} title={"Datos de la Cita"} />
      </Box>
    </>
  );
};
