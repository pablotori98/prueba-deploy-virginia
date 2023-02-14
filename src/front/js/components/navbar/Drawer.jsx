//Import react
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//Import Materials
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

//Material Icons
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from "@mui/icons-material/Menu";

//paginas y links
const paginas = ["Inicio", "Terapia", "Sobre Mi", "Contacto"];
const linkpaginas = ["/", "/terapia", "/sobremi", "/contacto"];
const pages = ["Home", "Therapy", "About Me", "Contact"];
const linkpagess = ["/", "/therapy", "/aboutme", "/contact"];

//Context
import { Context } from "../../store/appContext";


const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { actions, store } = useContext(Context);
  console.log("hola", store.language);
  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"

          }}
        >
          <Button onClick={() => setOpenDrawer(false)} className="closebutton p-0 m-0"><CloseIcon/></Button>
          {store.language == "spanish" ? (
            <>
              {paginas.map((page, index) => (
                <ListItemButton key={index} >
                  <ListItemIcon >
                    <Link to={linkpaginas[index]} className="linkremovestyle">
                      <ListItemText >{page}</ListItemText>
                    </Link>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </>
          ) : (
            <>
              {pages.map((page, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>
                    <Link to={linkpaginas[index]} className="linkremovestyle">
                      {" "}
                      <ListItemText>{page}</ListItemText>
                    </Link>
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
