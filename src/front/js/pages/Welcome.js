import { Box, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { FaqEnglish } from "../components/faq/FaqEnglish.jsx";
import { FaqSpanish } from "../components/faq/FaqSpanish.jsx";
import { JumbotronHome } from "../components/jumbotron/JumbotronHome.jsx";
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
    <Box sx={{
      
    }}>
        <Box className="d-flex flex-column align-items-center">
          <JumbotronHome />

        </Box>
    </Box>
  );
};

export default Welcome;
