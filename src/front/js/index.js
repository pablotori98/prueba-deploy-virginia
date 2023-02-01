//import react into the bundle
import React from "react";
import { useMemo } from "react";
import ReactDOM from "react-dom/client";
import globalReducer from "./state/index";
import { configureStore } from "@reduxjs/toolkit";
import { store } from './app/store';
import { Provider } from "react-redux";
import { SocketProvider } from "./state/SocketContext";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";



//render your react application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SocketProvider>
      <Provider store={store}>
        <Layout />
      </Provider>
    </SocketProvider>
  </React.StrictMode>
);
