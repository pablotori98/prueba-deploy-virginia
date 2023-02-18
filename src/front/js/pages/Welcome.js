import { Box, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { CardHome } from "../components/cards/CardHome.jsx";
import { ContactHome } from "../components/contacthome/ContactHome.jsx";
import { Faq } from "../components/faq/Faq.jsx";
import { FaqEnglish } from "../components/faq/FaqEnglish.jsx";
import { FaqSpanish } from "../components/faq/FaqSpanish.jsx";
import { BannerInfo } from "../components/infopsico/BannerInfo.jsx";
import { JumbotronHome } from "../components/jumbotron/JumbotronHome.jsx";
import { Therapies } from "../components/therapies/Therapies.jsx";
import { TherapiesSpanish } from "../components/therapies/therapieslanguage/TherapiesSpanish.jsx";
import { Context } from "../store/appContext";

const Welcome = () => {
  const { store, actions } = useContext(Context);
  const isTablet = useMediaQuery("(max-width: 1224px)");
  const isMobile = useMediaQuery("(max-width: 812px)");
  const newTitle = "Home";
  useLayoutEffect(() => {
    document.title = newTitle;
  }, []);
  return (
    <Box sx={{}}>
      <Box className="d-flex flex-column align-items-center">
        <JumbotronHome />
        <BannerInfo />
        <Therapies />
        <ContactHome />
        <Faq/>
      </Box>
    </Box>
  );
};

export default Welcome;
