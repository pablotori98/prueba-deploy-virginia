import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Blog = () => {
  const { actions, store } = useContext(Context);
  useEffect(() => {
    actions.getallpost();
  }, []);
  console.log("holsa", store.blogpost[0]);
  return (
    <Box className="blogsection">
      {store?.blogpost?.map((element, index) => {
        return (
          <Box className="blogpost" key={index}>
            <Link to={`/blog/${element.title_post}`} className="linkremovestyle text-black">
            <Typography variant="h2">{element.title_post}</Typography></Link>
            <Typography className="mt-3">{element.body_post}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};
