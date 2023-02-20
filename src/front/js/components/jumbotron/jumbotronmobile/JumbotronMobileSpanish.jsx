import { Box, Button } from "@mui/material";
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
          minHeight: "530px",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat"
        }}
        className="d-flex flex-column align-items-center justify-content-start w-100 "
      >
        <h1 className="fontabhaya mt-5">Nombre psicologa</h1>
        <h3 className="fontabhaya my-2">Breve descripcion psicologa</h3>
        <Link className="linkremovestyle" to="/contact">
        <Button
      variant="contained"
      className="btnjumbotron my-2"
      >CTA texto
      </Button>
      </Link>
      </Box>
  
    )
}