import React from "react";
import * as Yup from "yup";

const emailRules =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const clientFields = [
  {
    name: "agency",
    label: "Agencia",
  },
  { name: "subscriber_id", label: "Numero de Abonado" },
  {
    name: "name",
    label: "Nombre",
  },

  {
    name: "phone",
    label: "Telefono",
  },
  {
    name: "email",
    label: "Email",
  },
  {
    name: "password",
    label: "Contraseña",
  },
  {
    name: "password_confirmation",
    label: "Confirmar Contraseña",
  },
  { name: "contact_person1", label: "Persona de Contacto 1" },
  { name: "contact_person2", label: "Persona de Contacto 2" },
  {
    name: "address",
    label: "Direccion",
  },
  {
    name:"state",
    label:"Provincia"
  },
  {
    name:"city",
    label:"Ciudad"
  },
];

export const clientsInitialValues = {
  agency: "",
  subscriber_id: "",
  name: "",
  address: "",
  phone: "",
  email: "",
  password: "",
  password_confirmation: "",
  contact_person1: "",
  contact_person2: "",
  state:"",
  city:""
};

export const clientsValidationSchema = Yup.object().shape({
  agency: Yup.string()
    .required("Agencia es requerida")
    .min(4, "Agencia debe tener al menos 4 caracteres"),
  subscriber_id: Yup.string()
    .required("Numero de Abonado es requerido")
    .min(4, "Numero de Abonado debe tener al menos 4 caracteres"),
  name: Yup.string()
    .required("Nombre es requerido")
    .min(4, "Nombre debe tener al menos 4 caracteres"),
  address: Yup.string()
    .required("Direccion es requerida")
    .min(4, "Direccion debe tener al menos 4 caracteres"),
  phone: Yup.string()
    .required("Telefono es requerido")
    .min(4, "Telefono debe tener al menos 4 caracteres"),
  email: Yup.string()
    .required("Email es requerido")
    .min(4, "Email debe tener al menos 4 caracteres")
    .matches(emailRules, "Email no es valido"),
  password: Yup.string()
    .required("Contraseña es requerida")
    .min(8, "Contraseña debe tener al menos 8 caracteres")
    .matches(passwordRules, "Contraseña no es valida"),
  password_confirmation: Yup.string()
    .required("Confirmar Contraseña es requerida")
    .min(8, "Confirmar Contraseña debe tener al menos 8 caracteres")
    .matches(passwordRules, "Confirmar Contraseña no es valida"),
  contact_person1: Yup.string()
    .required("Persona de Contacto 1 es requerida")
    .min(4, "Persona de Contacto 1 debe tener al menos 4 caracteres"),
  contact_person2: Yup.string().min(
    4,
    "Persona de Contacto 2 debe tener al menos 4 caracteres"
  ),
});
