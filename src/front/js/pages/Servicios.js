//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";
import { PayPal } from "../components/PayPal/PayPal";
import { SessionPurchase } from "../components/purchases/SessionPurchase.jsx";

export const Servicios = () =>{
    return(
        <div>
        <SessionPurchase />
        </div>
    )
}