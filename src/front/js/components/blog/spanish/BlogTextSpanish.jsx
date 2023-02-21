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
            <Box key={index}>
              <Box className="blogpost mb-5">
                <Link
                  to={`/blog/${element.id}/${element.title_post}`}
                  className="linkremovestyle text-black"
                >
                  <img
                    className="imgpost"
                    src={element.image_post}
                  />
                  <Typography variant="h3" className="p-2">{element.title_post}</Typography>
                </Link>
                <Divider className="my-3" />
                {/* <img
                className="imgpost"
                src="https://img.freepik.com/foto-gratis/mujer-manos-juntas-hablando-consejero_23-2148759093.jpg?w=1380&t=st=1676660251~exp=1676660851~hmac=e5dc87333d7281a3a1b947ecde6ad9fdba67a84d9b7a12dc487749fb76e12abe"
              /> */}
              <Box className="px-5 py-2 paddingblogmobile">
                <Typography className="mt-3">{element.paragraph1}</Typography>
                {element.paragraph2==" "? null:<Typography className="mt-3">{element.paragraph2}</Typography>}
                {element.paragraph3==" "? null:<Typography className="mt-3">{element.paragraph3}</Typography>}
                {element.paragraph4==" "? null:<Typography className="mt-3">{element.paragraph4}</Typography>}
                {element.paragraph5==" "? null:<Typography className="mt-3">{element.paragraph5}</Typography>}
              </Box>
                <Typography className="mt-5 p-3">
                  Escrito por Nombre psicologa
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
