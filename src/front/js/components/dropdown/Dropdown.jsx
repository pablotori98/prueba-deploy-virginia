import React from "react"
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

export const Dropdown = () =>{
    return(
<div className="dropdown">
  <button className="btn dropdowncolor dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <PersonIcon className="text-white"/>
  </button>
  <ul className="dropdown-menu dropdown-menu-center borderdropdown">
    <li className="text-center"><Link className="dropdown-item" to="/login">Login</Link></li>
    <li className="text-center"><Link className="dropdown-item" to="/signup">Signup</Link></li>

  </ul>
</div>
)
}