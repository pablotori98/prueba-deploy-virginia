import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import { useFormik } from "formik";
  import dayjs from "dayjs";
  import React, { useContext } from "react";
  import { Context } from "../../../store/appContext";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { TimePicker } from "@mui/x-date-pickers/TimePicker";
  import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
  import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
  import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
  export const FormModalChangePassword = () => {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    const [value, setValue] = React.useState(dayjs(utc));
  
    const handleChanges = (newValue) => {
      setValue(newValue);
    };
    const { actions, store } = useContext(Context);
    const onSubmit = async (values, ax) => {
      await actions.modifyPassword(
        values.old_password,
        values.new_password,
        sessionStorage.getItem("current_user")
      );
      location.reload();
    };
    const { values, handleSubmit, handleChange, onChange } = useFormik({
      initialValues: {
        old_password: "",
        new_password: ""

      },
      onSubmit,
    });
    console.log(values);
    return (
      <Box>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <TextField
            className="mb-2"
            label="Antigua contraseña"
            name="old_password"
            values={values.old_password}
            onChange={handleChange}
          />
          <TextField
            className="mb-2"
            label="Nueva Contraseña"
            name="new_password"
            values={values.new_password}
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
  