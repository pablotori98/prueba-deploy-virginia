import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Box } from "@mui/material";
import { Context } from "../../store/appContext";

export const PayPal = () => {
  const {actions, store} = useContext(Context)
    return (
    <div className="container">
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
                    value: store.price,
                  },
                },
              ],
            });
          }}

          onApprove={(data, actionss) => {
            return actionss.order.capture().then((details) => {
                actions.paidSessions((store.sessions + store.user.paid_sessions), sessionStorage.getItem("user_id"), sessionStorage.getItem("current_user"))
            });
        }}
        />
      </PayPalScriptProvider>
    </div>
  );
};
