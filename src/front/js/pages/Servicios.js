//Import React
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";
import { PayPal } from "../components/PayPal/PayPal";
import { SessionPurchase } from "../components/purchases/SessionPurchase.jsx";

export const Servicios = () => {
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SessionPurchase />
    </div>
  );
};
