import { Box } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import { TherapiesSpanish } from "./therapieslanguage/TherapiesSpanish.jsx";
import { TherapiesEnglish} from "./therapieslanguage/TherapiesEnglish.jsx"
export const Therapies = () => {
  const { actions, store } = useContext(Context);
  return <Box>{store.language == "spanish" ? <TherapiesSpanish /> : <TherapiesEnglish/>}</Box>;
};
