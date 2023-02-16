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
      {store.language == "spanish" ? (
        <Box className="d-flex flex-column align-items-center">
          {/* <Box>Spanish</Box> */}
          <JumbotronHome />
          {/* <FaqSpanish/>   */}
        </Box>
      ) : (
        <Box className="d-flex flex-column align-items-center">
          <Box>English</Box>
          {/* <FaqEnglish/> */}
        </Box>
      )}
    </Box>
  );
};

export default Welcome;
