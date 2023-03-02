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
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

//Context
import { Context } from "../../store/appContext";
import { Box } from "@mui/system";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { actions, store } = useContext(Context);

  //paginas y links

  const paginas = [
    "Inicio",
    "Terapia",
    "Sobre Mi",
    "Blog",
    "Reseñas",
    "Contacto",
    "Bonos sesiones",
    "Iniciar sesión",
    "Registro",
  ];
  const paginaslogged = [
    "Inicio",
    "Terapia",
    "Sobre Mi",
    "Blog",
    "Reseñas",
    "Contacto",
    "Bonos Sesiones",
    "Perfil",
    "Citas",
  ];

  const linkpaginaslogged = [
    "/",
    "/services",
    "/aboutme",
    "/blog",
    "/reviews",
    "/contact",
    "/sessions",
    "/profile",
    "/citas",
    "/admin",
  ];

  const linkpaginas = [
    "/",
    "/services",
    "/aboutme",
    "/blog",
    "/reviews",
    "/contact",
    "/sessions",
    "/login",
    "/signup",
  ];
  const pages = [
    "Home",
    "Therapy",
    "About Me",
    "Blog",
    "Reviews",
    "Contact",
    "Sessions",
    "Login",
    "Sign Up",
  ];

  const pageslogged = [
    "Home",
    "Therapy",
    "About Me",
    "Blog",
    "Reviews",
    "Contact",
    "Sessions",
    "Profile",
    "Appointments",
  ];


  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        // sx={{
        //   "& .MuiDrawer-paper  *": {
        //     border: "1px solid red",
        //   },
        // }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Button
            onClick={() => setOpenDrawer(false)}
            className="closebutton p-0 m-0"
          >
            <CloseIcon className="text-black"/>
          </Button>
          {store.language == "spanish" ? (
            <>
              {store.access_token ? (
                <>
                  {paginaslogged.map((page, index) => (
                    <Box
                      key={index}
                      width="100%"
                      className="d-flex flex-column align-items-center"
                    >
                      <Link
                        to={linkpaginaslogged[index]}
                        className="linkremovestyle text-black linkheight my-4"
                      >
                        <ListItemText onClick={() => setOpenDrawer(false)}>
                          <strong>{page}</strong>
                        </ListItemText>
                      </Link>
                    </Box>
                  ))}

                  {store.user.is_admin ? (
                    <Link
                      className="linkremovestyle text-black linkheight my-4"
                      to="/admin"
                      onClick={() => setOpenDrawer(false)}
                    >
                      <strong>Admin</strong>
                    </Link>
                  ) : null}
                  <Button
                    className="linkremovestyle text-black linkheight my-4"
                    onClick={() => actions.logout()}
                  >
                    <strong>Cerrar sesión</strong>
                  </Button>
                </>
              ) : (
                paginas.map((page, index) => (
                  <Box
                    key={index}
                    width="100%"
                    className="d-flex flex-column align-items-center"
                  >
                    <Link
                      to={linkpaginas[index]}
                      className="linkremovestyle text-black linkheight my-4"
                    >
                      <ListItemText onClick={() => setOpenDrawer(false)}>
                        <strong>{page}</strong>
                      </ListItemText>
                    </Link>
                  </Box>
                ))
              )}
            </>
          ) : (
            store.access_token?
            <>
                          {pageslogged.map((page, index) => (
                <Box
                  key={index}
                  width="100%"
                  className="d-flex flex-column align-items-center"
                >
                  <Link
                    to={linkpaginaslogged[index]}
                    className="linkremovestyle text-black linkheight my-4"
                  >
                    <ListItemText onClick={() => setOpenDrawer(false)}>
                      <strong>{page}</strong>
                    </ListItemText>
                  </Link>
                </Box>
              ))}
                                {store.user.is_admin ? (
                    <Link
                      className="linkremovestyle text-black linkheight my-4"
                      to="/admin"
                      onClick={() => setOpenDrawer(false)}
                    >
                      <strong>Admin</strong>
                    </Link>
                  ) : null}
                  <Button
                    className="linkremovestyle text-black linkheight my-4"
                    onClick={() => actions.logout()}
                  >
                    <strong>LogOut</strong>
                  </Button>

            </>
            :
            <>
              {pages.map((page, index) => (
                <Box
                  key={index}
                  width="100%"
                  className="d-flex flex-column align-items-center"
                >
                  <Link
                    to={linkpaginas[index]}
                    className="linkremovestyle text-black linkheight my-4"
                  >
                    <ListItemText onClick={() => setOpenDrawer(false)}>
                      <strong>{page}</strong>
                    </ListItemText>
                  </Link>
                </Box>
              ))}
            </>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className="text-black" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
