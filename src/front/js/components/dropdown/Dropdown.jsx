import React, { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

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
        <PersonIcon className="text-white" />
      </button>
      {store.access_token == sessionStorage.getItem("access_token") ? (
        store.language == "spanish" ? (
          <ul className="dropdown-menu dropdown-menu-center borderdropdown">
            <li className="text-center">
              <Link className="dropdown-item" to="/profile">
                Perfil
              </Link>
            </li>
            <li className="text-center">
              <Link className="dropdown-item" to="/calendar">
                Citas
              </Link>
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
              <Link className="dropdown-item" to="/calendar">
                Appointments
              </Link>
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
