import { Box, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../store/appContext";

export const BlogTextSpanish = () => {
  const { store, actions } = useContext(Context);
  return (
    <Box>
      <Box className="blogsection">
        {store?.blogpost?.map((element, index) => {
          return (
            <>
 
              <Box className="blogpost mb-5" key={index}>
                <Link
                  to={`/blog/${element.title_post}`}
                  className="linkremovestyle text-black"
                >
                  <Typography variant="h2">{element.title_post}</Typography>
                </Link>
                <Divider className="my-3" />
                <img
                className="imgpost"
                src="https://img.freepik.com/foto-gratis/mujer-manos-juntas-hablando-consejero_23-2148759093.jpg?w=1380&t=st=1676660251~exp=1676660851~hmac=e5dc87333d7281a3a1b947ecde6ad9fdba67a84d9b7a12dc487749fb76e12abe"
              />
                <Typography className="mt-3">{element.paragraph1}</Typography>
                <Typography className="mt-3">{element.paragraph2}</Typography>
                <Typography className="mt-3">{element.paragraph3}</Typography>
                <Typography className="mt-3">{element.paragraph4}</Typography>
                <Typography className="mt-3">{element.paragraph5}</Typography>
                
                <Typography className="mt-5">
                  Escrito por Nombre psicologa
                </Typography>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
};
