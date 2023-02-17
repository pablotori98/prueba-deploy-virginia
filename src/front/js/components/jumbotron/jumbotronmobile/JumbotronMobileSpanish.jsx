import { Box } from "@mui/material";
import React from "react";
import imgjumbo from "../../../assets/jumbotron/jumbotroncenter.png";
import imgjumbomobile from "../../../assets/jumbotron/jumbotroncentermobile.png";

export const JumbotronMobileSpanish = () =>{
    return(
        <Box
        sx={{
          backgroundImage: `url(${imgjumbomobile})`,
          backgroundColor: "#f2ebe7",
          width: "100vw",
          backgroundSize: "contain",
          height: "80vh",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat"
        }}
        className="d-flex flex-column align-items-center justify-content-start w-100 "
      >
        <h1 className="fontabhaya mt-5">Nombre psicologa</h1>
        <h3 className="fontabhaya">Breve descripcion psicologa</h3>
      </Box>
  
    )
}