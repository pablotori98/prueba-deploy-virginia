//Import React
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

//Import materials
import { Box, MenuItem, Select, Typography, FormControl, InputLabel } from "@mui/material";
import { PayPal } from "../PayPal/PayPal";
import { Context } from "../../store/appContext"
export const SessionPurchase = () => {
  const {actions, store} = useContext(Context)
    const [sessions, setSessions] = useState(1)
    const [price, setPrice] = useState()

    const handleChange = (event) => {
        setSessions(event.target.value);
      };
      useEffect(()=>{actions.setPrice((sessions * 50).toFixed(1))
      },[sessions])

      
  return (
    <Box className="fatherpurchase">
      <Box className="leftpurchase">
        Comprar Sesiones

        <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sessions}
          label="sessions"
          onChange={handleChange}
        >
          <MenuItem value={1}>1 Sesión</MenuItem>
          <MenuItem value={2}>2 Sesiones</MenuItem>
          <MenuItem value={3}>3 Sesiones</MenuItem>
          <MenuItem value={4}>4 Sesiones</MenuItem>
          <MenuItem value={5}>5 Sesiones</MenuItem>
        </Select>
      </FormControl>
      </Box>

      <Box className="rightpurchase">
        <Box>
            <Typography>Precio {store.price}€</Typography>
        </Box>
        <PayPal />
      </Box>
    </Box>
  );
};
