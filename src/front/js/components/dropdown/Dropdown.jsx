import React, { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { Button } from "@mui/material";

export const Dropdown = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="dropdown">
      <button
        className="btn dropdowncolor dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <PersonIcon className="text-black" />
      </button>
      {store.access_token ? (
        store.language == "spanish" ? 
        (store.user.is_admin? 

          <ul className="dropdown-menu dropdown-menu-center borderdropdown">
            <li className="text-center">
              <Link className="dropdown-item" to="/profile">
                Perfil
              </Link>
            </li>
            <li className="text-center">
              <Link className="dropdown-item" to="/citas">
                Citas
              </Link>
            </li>
            <li className="text-center">
              <Link className="dropdown-item" to="/admin">
                Admin
              </Link>
            </li>
            <li className="text-center">
              <Button className="text-black" sx={{textTransform: 'none'}} onClick={()=> actions.logout()}>
                <strong>Cerrar sesión</strong>
              </Button>
            </li>
          </ul>

:
          <ul className="dropdown-menu dropdown-menu-center borderdropdown">
            <li className="text-center">
              <Link className="dropdown-item" to="/profile">
                Perfil
              </Link>
            </li>
            <li className="text-center">
              <Link className="dropdown-item" to="/tuscitas">
                Citas
              </Link>
            </li>
            <li className="text-center">
              <Button className="text-black" sx={{textTransform: 'none'}} onClick={()=> actions.logout()}>
                Cerrar sesión
              </Button>
            </li>
          </ul>
        ) : (
          <ul className="dropdown-menu dropdown-menu-center borderdropdown">
            <li className="text-center">
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <li className="text-center">
              <Link className="dropdown-item" to="/tuscitas">
                Appointments
              </Link>
            </li>
            <li className="text-center">
              <Button className="text-black" sx={{textTransform: 'none'}} onClick={()=> actions.logout()}>
                <strong>Logout</strong>
              </Button>
            </li>
          </ul>
        )
      ) : (
        <ul className="dropdown-menu dropdown-menu-center borderdropdown">
          <li className="text-center">
            <Link className="dropdown-item" to="/login">
              Login
            </Link>
          </li>
          <li className="text-center">
            <Link className="dropdown-item" to="/signup">
              Signup
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
