import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imgjumbo from "../../assets/jumbotron/jumbotroncenter.png";
import imgjumbomobile from "../../assets/jumbotron/jumbotroncentermobile.png";

import { JumbotronMobileEnglish } from "./jumbotronmobile/JumbotronMobileEnglish.jsx";
import { JumbotronMobileSpanish } from "./jumbotronmobile/JumbotronMobileSpanish.jsx";

import { Context } from "../../store/appContext";
import { JumbotronDesktopSpanish } from "./jumbotrondesktop/JumbotronDesktopSpanish.jsx";
import { JumbotronDesktopEnglish } from "./jumbotrondesktop/JumbotronDesktopEnglish.jsx";
import { TherapiesSpanish } from "../therapies/therapieslanguage/TherapiesSpanish.jsx";
import { Therapies } from "../therapies/Therapies.jsx";
export const JumbotronHome = () => {
  const { store, actions } = useContext(Context);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMatch ? (
        store.language == "spanish" ? (
          <JumbotronMobileSpanish />
        ) : (
          <JumbotronMobileEnglish />
        )
      ) : store.language == "spanish" ? (
        <JumbotronDesktopSpanish />
      ) : (
        <JumbotronDesktopEnglish />
      )}
    </>
  );
};
