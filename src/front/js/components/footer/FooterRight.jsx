//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import materials
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export const FooterRight = () => {
  return (
    <Box className="footerright">
      <Box className="m-1 ">
        <a className="text-white mx-2" href="https://www.instagram.com/" target="__blank">
          <InstagramIcon className="" sx={{ fontSize: "2.5rem" }} />
        </a>
      </Box>
      <Box className="m-1">
        <a className="text-white mx-2" href="https://www.facebook.com/" target="__blank">
          <FacebookIcon sx={{ fontSize: "2.5rem" }} />
        </a>
      </Box>
      <Box className="m-1">
        <a className="text-white mx-2" href="https://twitter.com/" target="__blank">
          <TwitterIcon sx={{ fontSize: "2.5rem" }} />
        </a>
      </Box>
    </Box>
  );
};
