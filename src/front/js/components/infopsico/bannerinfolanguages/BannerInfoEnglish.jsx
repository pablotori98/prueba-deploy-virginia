import { Box, Typography } from "@mui/material";
import React from "react";
import imagenpsicologa from "../../../assets/psicologa/psicologaimagen.jpg";
export const BannerInfoEnglish = () => {
  return (
    <Box>
    <Box className="bannerinfo">
      <Box className="leftbanner">
        <img className="imagenpersona" src={imagenpsicologa} />
      </Box>
      <Box className="rightbanner">
        <Typography>
          English lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E1BAAC" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,149.3C384,128,480,64,576,64C672,64,768,128,864,149.3C960,171,1056,149,1152,144C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </Box>
  );
};
