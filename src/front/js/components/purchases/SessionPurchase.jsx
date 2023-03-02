//Import React
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import imagenpago from "../../assets/forms/pago.png";
//Import materials
import {
  Box,
  MenuItem,
  Select,
  Typography,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { PayPal } from "../PayPal/PayPal";
import { Context } from "../../store/appContext";
export const SessionPurchase = () => {
  const { actions, store } = useContext(Context);
  const [sessions, setSessions] = useState(1);
  const [price, setPrice] = useState();
  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setSessions(event.target.value);
  };
  useEffect(() => {
    actions.setPrice((sessions * 50).toFixed(1));
  }, [sessions]);

  useEffect(() => {
    actions.setSessions(sessions);
  }, [sessions]);
  useEffect(() => {
    <PayPal />;
  }, []);
  return (
    <Box className="fatherpurchase">
      <Box className="leftpurchase">
        <img className="leftimagepurchase" src={imagenpago} />
      </Box>
      {store.language == "spanish" ? (
        <Box className="rightpurchase">
          <p className="fontabhaya my-3 fontsize3rem">Sesiones terapia</p>

          <FormControl className="my-4 w-50">
            <InputLabel id="demo-simple-select-label">Sesiones</InputLabel>
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
          <Box className="w-50">
            <p className="fontabhaya text-center fontsize2rem">
              Precio {store.price}€
              {/* sesiones {store.sessions}
            creado {store.user.paid_sessions} */}
            </p>

            {store.user.username ? (
              open == true ? (
                <PayPal />
              ) : (
                <Button
                  onClick={() => setOpen(true)}
                  variant="contained"
                  className="paybutton w-100"
                >
                  Pagar
                </Button>
              )
            ) : (
              <Box>
                <Button variant="contained" className="paybutton w-100">
                  <Link to="/signup" className="linkremovestyle text-white">
                    <strong>Registrate para comprar bonos</strong>
                  </Link>
                </Button>
                <Button variant="contained" className="paybutton w-100 my-2">
                  <Link to="/login" className="linkremovestyle text-white">
                    <strong>Inicia sesión para comprar bonos</strong>
                  </Link>
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      ) : (
        <Box className="rightpurchase">
          <p className="fontabhaya my-3 fontsize3rem">Therapy Sessions</p>

          <FormControl className="my-4 w-50">
            <InputLabel id="demo-simple-select-label">Sessions</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sessions}
              label="sessions"
              onChange={handleChange}
            >
              <MenuItem value={1}>1 Session</MenuItem>
              <MenuItem value={2}>2 sessions</MenuItem>
              <MenuItem value={3}>3 sessions</MenuItem>
              <MenuItem value={4}>4 sessions</MenuItem>
              <MenuItem value={5}>5 sessions</MenuItem>
            </Select>
          </FormControl>
          <Box className="w-50">
            <p className="fontabhaya text-center fontsize2rem">
              Price {store.price}€
              {/* sesiones {store.sessions}
            creado {store.user.paid_sessions} */}
            </p>

            {store.user.username ? (
              open == true ? (
                <PayPal />
              ) : (
                <Button
                  onClick={() => setOpen(true)}
                  variant="contained"
                  className="paybutton w-100"
                >
                  Pay
                </Button>
              )
            ) : (
              <Box>
                <Button variant="contained" className="paybutton w-100">
                  <Link to="/signup" className="linkremovestyle text-white">
                    <strong>Sign Up to buy sessions</strong>
                  </Link>
                </Button>
                <Button variant="contained" className="paybutton w-100 my-2">
                  <Link to="/login" className="linkremovestyle text-white">
                    <strong>Log in to buy sessions</strong>
                  </Link>
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
