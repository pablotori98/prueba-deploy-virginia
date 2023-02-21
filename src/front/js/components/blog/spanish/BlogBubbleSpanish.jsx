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
            key={index}
            to={`/blog/${element.id}/${element.title_post}`}
            className="linkremovestyle text-black bubblelink"
          >
            <Box className="bubblepost" >
            <img
                className="imgpostbubble"
                src={element.image_post}
              />
                <Typography variant="h4" className="pt-2">{element.title_post}</Typography>
                <Typography className="p-3">{element.paragraph1.substring(0, 100)} <strong>read more...</strong></Typography>

            </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
