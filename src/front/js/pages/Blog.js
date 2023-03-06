//React
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
//Materials
import { Box, Button, Typography } from "@mui/material";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
//Context
import { Context } from "../store/appContext";
//Components
import { BlogBubbleSpanish } from "../components/blog/spanish/BlogBubbleSpanish.jsx";
import { BlogTextEnglish } from "../components/blog/english/BlogTextEnglish.jsx";
import { BlogBubbleEnglish } from "../components/blog/english/BlogBubbleEnglish.jsx";
import { BlogTextSpanish } from "../components/blog/spanish/BlogTextSpanish.jsx";

export const Blog = () => {
//Use Context
  const { actions, store } = useContext(Context);

//Usestates
  const [read, setRead] = useState(true);

 //Nombre de la pestaña
  if (store.language == "spanish") {
    const newTitle = "Blog";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);
  } else {
    const newTitle = "Blog";
    useLayoutEffect(() => {
      document.title = newTitle;
    }, []);
  }
  //UseEffects
  //Funciones
  useEffect(() => {
    actions.getallpost();
  }, []);

  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className="container">
      <Box className="d-flex justify-content-end ps-5">
        <Button
          className="text-black"
          onClick={read == true ? () => setRead(false) : () => setRead(true)}
        >
          Cambiar disposición <ChromeReaderModeIcon className="ms-1" />
        </Button>
      </Box>
      <Box className="d-flex justify-content-center text-center">
        {store.language == "spanish" ? (
          read == true ? (
            <BlogTextSpanish />
          ) : (
            <BlogBubbleSpanish />
          )
        ) : read == true ? (
          <BlogTextEnglish />
        ) : (
          <BlogBubbleEnglish />
        )}
      </Box>
    </Box>
  );
};
