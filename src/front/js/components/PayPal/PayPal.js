import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Box } from "@mui/material";

export const PayPal = ({ price }) => {

    return (
    <div className="container">
        <Box>soy el price que viene del otro {price}</Box>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AZpUv2LSpYqkn2sSFwu-JgZvGa1jLBP57fx26jFlQjMgm7HP9UUXQrRXau3u1qy3cZ6i-GJ8zyPny9rh",
            "currency": "EUR"
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: price,
                  },
                },
              ],
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};
