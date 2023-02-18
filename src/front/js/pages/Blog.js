import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogTextSpanish } from "../components/blog/spanish/BlogTextSpanish.jsx";
import { Context } from "../store/appContext";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import { BlogBubbleSpanish } from "../components/blog/spanish/BlogBubbleSpanish.jsx";

export const Blog = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.getallpost();
  }, []);
  const [read, setRead] = useState(true);
  return (
    <Box className="container">
      <Box className="d-flex justify-content-end ps-5">
      <Button  className="text-black"
        onClick={read == true ? () => setRead(false) : () => setRead(true)}
      >
        Cambiar disposición <ChromeReaderModeIcon className="ms-1"/>
      </Button>
      </Box>
      <Box className="d-flex justify-content-center text-center">
      {read == true ? <BlogTextSpanish /> : <BlogBubbleSpanish />}
      </Box>
    </Box>
  );
};
