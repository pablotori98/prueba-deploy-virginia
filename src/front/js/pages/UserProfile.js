//Import React
import React, { useContext, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";

import { Context } from "../store/appContext";
export const UserProfile = () =>{
    const {actions, store} = useContext(Context)
    const newTitle = store.language=="spanish" ? "Perfil" : "Profile"
    useLayoutEffect(() => {
      document.title = newTitle
    }, [])
    return (<h1>User profile</h1>)
}