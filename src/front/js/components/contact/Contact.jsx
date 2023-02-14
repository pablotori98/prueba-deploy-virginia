import React, { useContext, useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box, Button } from "@mui/material";
import englishflag from "../../assets/contact/englishflag.jpg"
import spanishflag from "../../assets/contact/spanishflag.png"
import {Context} from "../../store/appContext.js"
export const Contact = () => {
 const {actions, store} = useContext(Context)
  const [language, setLanguage]= useState("spanish")
  language=="spanish"? sessionStorage.setItem("language", "spanish"):sessionStorage.setItem("language", "english")
 
  const setlanguageenglish = () =>{
    setLanguage("english")
    sessionStorage.setItem("language", "english")    
    actions.changeLanguage("english")
  }
  const setlanguagespanish = () =>{
    setLanguage("spanish")
    sessionStorage.setItem("language", "spanish")
    actions.changeLanguage("spanish")

  }
  

  return (
    <Box className="contactfixed">
      {language=="spanish"? 
      
      <Button onClick={()=>{setlanguageenglish()}}>
      <img className="imglanguage" src={englishflag}/>
    </Button>
      :
      <Button onClick={()=>setlanguagespanish()}>
      <img className="imglanguage" src={spanishflag}/>
    </Button>
      }

      <a
        href="https://wa.me/622820998/?text=urlencodedtext"
        data-action="share/whatsapp/share"
        target="_blank"
      >
        <Button className="buttoncontactfixed">
          <WhatsAppIcon className="iconcontactfixed" />
        </Button>
      </a>
      <a href="tel:">
        <Button className="buttoncontactfixed">
          <PhoneIcon className="iconcontactfixed" />
        </Button>
      </a>
      <a href="mailto:email@email.com">
        <Button className="buttoncontactfixed">
          <MailOutlineIcon className="iconcontactfixed" />
        </Button>
      </a>
    </Box>
  );
};
