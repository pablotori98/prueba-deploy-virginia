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
            to={`/blog/${element.title_post}`}
            className="linkremovestyle text-black bubblelink"
          >
            <Box className="bubblepost" >
            <img
                className="imgpostbubble"
                src="https://img.freepik.com/foto-gratis/mujer-manos-juntas-hablando-consejero_23-2148759093.jpg?w=1380&t=st=1676660251~exp=1676660851~hmac=e5dc87333d7281a3a1b947ecde6ad9fdba67a84d9b7a12dc487749fb76e12abe"
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
