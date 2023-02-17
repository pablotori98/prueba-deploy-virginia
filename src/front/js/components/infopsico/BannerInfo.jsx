import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import imagenpsicologa from "../../assets/psicologa/psicologaimagen.jpg";
import { Context } from "../../store/appContext"
import { BannerInfoEnglish } from "./bannerinfolanguages/BannerInfoEnglish.jsx";
import { BannerInfoSpanish } from "./bannerinfolanguages/BannerInfoSpanish.jsx";
export const BannerInfo = () => {
    const {actions, store} = useContext(Context)
  return (
    <Box>
        {store.language == "spanish"?
    <BannerInfoSpanish />  
    :
    <BannerInfoEnglish />  
    }
    </Box>
  );
};
