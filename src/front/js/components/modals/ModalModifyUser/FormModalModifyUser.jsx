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
export const FormModalModifyUser = () => {
  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  const [value, setValue] = React.useState(dayjs(utc));

  const handleChanges = (newValue) => {
    setValue(newValue);
  };
  const { actions, store } = useContext(Context);
  const onSubmit = async (values, ax) => {
    await actions.createreview(
      values.first_name,
      values.last_name,
      values.username,
      values.password,
      values.phone_number,
      values.city,
      values.birth_date,
      values.age
    );
    location.reload();
  };
  const { values, handleSubmit, handleChange, onChange } = useFormik({
    initialValues: {
      first_name: store.user.first_name,
      last_name: store.user.last_name,
      username: store.user.username,
      phone_number: store.user.phone_number,
      city: "",
      birth_date: "",
      age: "",
    },
    onSubmit,
  });
  console.log(values);
  return (
    <Box>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <TextField
          defaultValue={store.user.first_name}
          className="mb-2"
          label="Nombre"
          name="first_name"
          values={values.first_name}
          onChange={handleChange}
        />
        <TextField
          defaultValue={store.user.last_name}
          className="mb-2"
          label="Apellidos"
          name="last_name"
          values={values.last_name}
          onChange={handleChange}
        />
        <TextField
          defaultValue={store.user.username}
          className="mb-2"
          label="Username"
          name="username"
          values={values.username}
          onChange={handleChange}
        />
        <TextField
          defaultValue={store.user.phone_number}
          label="Teléfono"
          className="mb-2"
          name="phone_number"
          values={values.phone_number}
          onChange={handleChange}
        />
        <TextField
          label="Ciudad"
          name="city"
          className="mb-2"
          values={values.city}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} className="mb-2">
          <MobileDatePicker
            label="Date mobile"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChanges}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

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
