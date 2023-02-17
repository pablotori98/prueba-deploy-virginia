import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../store/appContext";

export const BlogBubbleSpanish = () => {
  const { store, actions } = useContext(Context);
  return (
    <Box>
      <Box className="blogbubblesection">
        {store?.blogpost?.map((element, index) => {
          return (
            <Link
            to={`/blog/${element.title_post}`}
            className="linkremovestyle text-black"
          >
            <Box className="bubblepost" key={index}>

                <Typography variant="h2">{element.title_post}</Typography>

            </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
