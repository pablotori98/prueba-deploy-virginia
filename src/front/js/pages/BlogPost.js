//Import react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Materials
import { Box, Button, Typography } from "@mui/material";
//Components
import { BlogBubbleSpanish } from "../components/blog/spanish/BlogBubbleSpanish.jsx";
import { OnlyPostSpanish } from "../components/blog/spanish/OnlyPostSpanish.jsx";
//Context
import { Context } from "../store/appContext";

export const BlogPost = () => {
  const { actions, store } = useContext(Context);

  return (
    <Box className="container">
      <Box className="d-flex justify-content-end ps-5">
      </Box>
      <Box className="d-flex justify-content-center text-center">
        <OnlyPostSpanish />
      </Box>
    </Box>
  );
};
